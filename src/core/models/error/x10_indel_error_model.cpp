// Copyright (c) 2015-2018 Daniel Cooke
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

#include "x10_indel_error_model.hpp"

namespace octopus {

std::unique_ptr<IndelErrorModel> X10IndelErrorModel::do_clone() const
{
    return std::make_unique<X10IndelErrorModel>(*this);
}

namespace {

static constexpr std::array<IndelErrorModel::PenaltyType, 50> at_homopolymerErrors_ =
{{
 // 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
 60,60,44,42,40,36,34,30,24,20,16,13,12,11,10,9,9,8,8,8,7,7,
 7,6,6,6,5,5,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3
 }};
static constexpr std::array<IndelErrorModel::PenaltyType, 50> cg_homopolymerErrors_ =
{{
 // 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
 60,60,42,40,37,35,28,22,18,15,12,10,9,7,6,4,4,5,5,4,4,4,4,4,
 3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3
 }};
static constexpr std::array<IndelErrorModel::PenaltyType, 50> diNucleotideTandemRepeatErrors_ =
{{
 // 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
 60,60,38,37,33,27,21,18,16,15,14,13,13,12,12,12,11,11,10,10,
 9,9,9,9,8,7,7,6,6,6,5,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3
 }};
static constexpr std::array<IndelErrorModel::PenaltyType, 50> triNucleotideTandemRepeatErrors_ =
{{
 // 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
 60,60,38,33,26,22,20,19,18,18,17,16,17,15,14,14,14,14,13,12,
 12,11,10,10,8,7,7,6,6,5,5,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3
 }};
static constexpr std::array<IndelErrorModel::PenaltyType, 50> polyNucleotideTandemRepeatErrors_ =
{{
 // 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
 60,60,50,46,42,38,32,28,26,25,24,23,22,21,18,17,17,16,15,14,
 13,12,11,10,9,8,7,6,6,6,5,5,5,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3
 }};


template <typename C, typename T>
static auto get_min_penalty(const C& penalties, const T length) noexcept
{
    return (length < penalties.size()) ? penalties[length] : penalties.back();
}

} // namespace

X10IndelErrorModel::PenaltyType
X10IndelErrorModel::get_default_open_penalty() const noexcept
{
    return at_homopolymerErrors_.front();
}

X10IndelErrorModel::PenaltyType
X10IndelErrorModel::get_open_penalty(const Sequence& motif, const unsigned length) const noexcept
{
    const auto period = motif.size();
    const auto periodicity = length / period;
    switch (period) {
        case 1:
        {
            if (motif[0] == 'A' || motif[0] == 'T') {
                return get_min_penalty(at_homopolymerErrors_, periodicity);
            } else {
                return get_min_penalty(cg_homopolymerErrors_, periodicity);
            }
        }
        case 2:
        {
            auto result = get_min_penalty(diNucleotideTandemRepeatErrors_, periodicity);
            if (result > 7 && (motif == "CG" || motif == "GC")) result -= 2;
            return result;
        }
        case 3:
        {
            return get_min_penalty(triNucleotideTandemRepeatErrors_, periodicity);
        }
        default:
            return get_min_penalty(polyNucleotideTandemRepeatErrors_, periodicity);
    }
}

X10IndelErrorModel::PenaltyType
X10IndelErrorModel::get_default_extension_penalty() const noexcept
{
    return 3;
}

X10IndelErrorModel::PenaltyType
X10IndelErrorModel::get_extension_penalty(const Sequence& motif, const unsigned length) const noexcept
{
    switch (motif.size()) {
        case 2:
        case 3: return 2;
        default: return get_default_extension_penalty();
    }
}

} // namespace octopus
