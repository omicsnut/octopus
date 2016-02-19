//
//  haplotype_likelihood_cache.hpp
//  Octopus
//
//  Created by Daniel Cooke on 25/11/2015.
//  Copyright © 2015 Oxford University. All rights reserved.
//

#ifndef haplotype_likelihood_cache_hpp
#define haplotype_likelihood_cache_hpp

#include <unordered_map>
#include <cstddef>

#include "common.hpp"
#include "haplotype.hpp"
#include "aligned_read.hpp"
#include "haplotype_liklihood_model.hpp"

namespace std
{
    template <typename T> struct hash<reference_wrapper<const T>>
    {
        size_t operator()(reference_wrapper<const T> r) const
        {
            return hash<T>()(r);
        }
    };
} // namespace std

namespace Octopus
{
    class HaplotypeLikelihoodCache
    {
    public:
        HaplotypeLikelihoodCache()  = default;
        
        explicit HaplotypeLikelihoodCache(const ReadMap& reads,
                                          const std::vector<Haplotype>& haplotypes);
        
        explicit HaplotypeLikelihoodCache(HaplotypeLikelihoodModel error_model,
                                          const ReadMap& reads,
                                          const std::vector<Haplotype>& haplotypes);
        
        ~HaplotypeLikelihoodCache() = default;
        
        HaplotypeLikelihoodCache(const HaplotypeLikelihoodCache&)            = default;
        HaplotypeLikelihoodCache& operator=(const HaplotypeLikelihoodCache&) = default;
        HaplotypeLikelihoodCache(HaplotypeLikelihoodCache&&)                 = default;
        HaplotypeLikelihoodCache& operator=(HaplotypeLikelihoodCache&&)      = default;
        
        double log_probability(const AlignedRead& read, const Haplotype& haplotype) const; // ln p(read | haplotype)
        
        void clear();
        
    private:
        using ReadReference      = std::reference_wrapper<const AlignedRead>;
        using HaplotypeReference = std::reference_wrapper<const Haplotype>;
        
        using Cache = std::unordered_map<ReadReference, std::unordered_map<HaplotypeReference, double>>;
        
        HaplotypeLikelihoodModel error_model_;
        
        mutable Cache cache_;
        
        std::size_t max_num_haplotypes_;
        
        bool is_cached(const AlignedRead& read, const Haplotype& haplotype) const noexcept;
        void cache(const AlignedRead& read, const Haplotype& haplotype, double value) const;
        double get_cached(const AlignedRead& read, const Haplotype& haplotype) const;
    };
    
    namespace debug
    {
        void print_read_haplotype_liklihoods(const std::vector<Haplotype>& haplotypes,
                                             const ReadMap& reads,
                                             HaplotypeLikelihoodCache& haplotype_likelihoods,
                                             size_t n = 5);
    } // namespace debug
} // namespace Octopus

#endif /* haplotype_likelihood_cache_hpp */
