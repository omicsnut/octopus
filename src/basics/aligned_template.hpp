// Copyright (c) 2015-2019 Daniel Cooke
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

#ifndef aligned_template_hpp
#define aligned_template_hpp

#include <vector>
#include <unordered_map>
#include <iterator>

#include "concepts/comparable.hpp"
#include "concepts/equitable.hpp"
#include "concepts/mappable.hpp"
#include "basics/genomic_region.hpp"
#include "basics/aligned_read.hpp"
#include "basics/mappable_reference_wrapper.hpp"
#include "utils/mappable_algorithms.hpp"

namespace octopus {

class AlignedTemplate : public Comparable<AlignedTemplate>, public Mappable<AlignedTemplate>
{
public:
    
    AlignedTemplate() = default;
    
    AlignedTemplate(const AlignedRead& read);
    template <typename InputIterator>
    AlignedTemplate(InputIterator first, InputIterator last);
    
    AlignedTemplate(const AlignedTemplate& other)            = default;
    AlignedTemplate& operator=(const AlignedTemplate& other) = default;
    AlignedTemplate(AlignedTemplate&&)                       = default;
    AlignedTemplate& operator=(AlignedTemplate&&)            = default;
    
    ~AlignedTemplate() = default;
    
    const GenomicRegion& mapped_region() const noexcept;
    
    std::size_t size() const noexcept;
    
    const AlignedRead& operator[](std::size_t idx) const noexcept;
    
    friend bool operator==(const AlignedTemplate& lhs, const AlignedTemplate& rhs) noexcept;
    friend bool operator<(const AlignedTemplate& lhs, const AlignedTemplate& rhs) noexcept;
    
private:
    using AlignedReadReference = MappableReferenceWrapper<const AlignedRead>;
    using ReadVector = std::vector<AlignedReadReference>;
    
    ReadVector template_;
    GenomicRegion region_;

public:
    class iterator : public ReadVector::const_iterator
    {
    public:
        using value_type = AlignedRead;
        using reference  = const AlignedRead&;
        using pointer    = const AlignedRead*;
        
        iterator(ReadVector::const_iterator itr) : ReadVector::const_iterator {itr} {}
        reference operator*() const { return ReadVector::const_iterator::operator*().get(); }
    };
    using const_iterator = iterator;
    
    iterator begin() const noexcept { return template_.begin(); }
    iterator end() const noexcept  { return template_.end(); }
    const_iterator cbegin() const noexcept  { return template_.cbegin(); }
    const_iterator cend() const noexcept  { return template_.cend(); }
};

template <typename InputIterator>
AlignedTemplate::AlignedTemplate(InputIterator first, InputIterator last)
: template_ {first, last}
{
    if (template_.empty()) {
        throw;
    } else {
        region_ = encompassing_region(template_);
    }
}

// non-member methods

bool operator==(const AlignedTemplate& lhs, const AlignedTemplate& rhs) noexcept;
bool operator<(const AlignedTemplate& lhs, const AlignedTemplate& rhs) noexcept;

bool is_rightmost_segment(const AlignedRead& read) noexcept;

template <typename ForwardIterator, typename OutputIterator>
OutputIterator
make_read_templates(ForwardIterator first_read_itr, ForwardIterator last_read_itr,
                    OutputIterator result_itr)
{
    std::unordered_map<std::string, std::vector<MappableReferenceWrapper<const AlignedRead>>> buffer {};
    std::for_each(first_read_itr, last_read_itr, [&] (const AlignedRead& read) {
        if (read.has_other_segment()) {
            const auto& template_id = read.name();
            if (template_id.empty()) {
                throw;
            }
            if (is_rightmost_segment(read)) {
                const auto template_itr = buffer.find(template_id);
                if (template_itr == std::cend(buffer)) {
                    *result_itr++ = {read};
                } else {
                    template_itr->second.emplace_back(read);
                    *result_itr++ = {std::cbegin(template_itr->second), std::cend(template_itr->second)};
                    buffer.erase(template_itr);
                }
            } else {
                buffer[template_id].emplace_back(read);
            }
        } else {
            *result_itr++ = {read};
        }
    });
    for (const auto& p : buffer) {
        *result_itr++ = {std::cbegin(p.second), std::cend(p.second)};
    }
    return result_itr;
}

} // namespace octopus

#endif
