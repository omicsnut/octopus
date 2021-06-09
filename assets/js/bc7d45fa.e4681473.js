(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5255:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],l={id:"cancer",title:"cancer"},s={unversionedId:"guides/models/cancer",id:"guides/models/cancer",isDocsHomePage:!1,title:"cancer",description:"The cancer calling model is for calling germline variation and somatic mutations in tumours. The model can jointly genotype multiple tumours from the same individual, and make use of a normal sample for improved classification power.",source:"@site/docs/guides/models/cancer.md",sourceDirName:"guides/models",slug:"/guides/models/cancer",permalink:"/octopus/docs/guides/models/cancer",editUrl:"https://github.com/${organizationName}/${projectName}/edit/${branch}/website/docs/guides/models/cancer.md",version:"current",frontMatter:{id:"cancer",title:"cancer"},sidebar:"docs",previous:{title:"population",permalink:"/octopus/docs/guides/models/population"},next:{title:"polyclone",permalink:"/octopus/docs/guides/models/polyclone"}},p=[{value:"Usage: tumour-normal pairs",id:"usage-tumour-normal-pairs",children:[]},{value:"Usage: tumour only",id:"usage-tumour-only",children:[]},{value:"VCF output",id:"vcf-output",children:[]},{value:"<code>QUAL</code> vs <code>PP</code>",id:"qual-vs-pp",children:[]},{value:"<code>HPC</code>, <code>MAP_HF</code> and <code>HF_CR</code>",id:"hpc-map_hf-and-hf_cr",children:[]},{value:"Performance considerations",id:"performance-considerations",children:[]},{value:"SOMATICs only",id:"somatics-only",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cancer")," calling model is for calling germline variation and somatic mutations in tumours. The model can jointly genotype multiple tumours from the same individual, and make use of a normal sample for improved classification power."),(0,o.kt)("h2",{id:"usage-tumour-normal-pairs"},"Usage: tumour-normal pairs"),(0,o.kt)("p",null,"To call germline and somatic mutations in a paired tumour-normal sample, just specify which sample is the normal (",(0,o.kt)("inlineCode",{parentName:"p"},"--normal-sample"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"-N"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I normal.bam tumour.bam --normal-sample NORMAL\n")),(0,o.kt)("p",null,"It is also possible to genotype multiple tumours from the same individual jointly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I normal.bam tumourA.bam tumourB.bam -N NORMAL\n")),(0,o.kt)("h2",{id:"usage-tumour-only"},"Usage: tumour only"),(0,o.kt)("p",null,"If a normal sample is not present the cancer calling model must be invoked explicitly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ octopus -R hs37d5.fa -I tumourA.bam tumourB.bam -C cancer\n")),(0,o.kt)("p",null,"Be aware that without a normal sample, somatic mutation classification power is significantly reduced."),(0,o.kt)("h2",{id:"vcf-output"},"VCF output"),(0,o.kt)("p",null,"By default both germline and somatic variants are called, somatic mutations are tagged with the ",(0,o.kt)("inlineCode",{parentName:"p"},"SOMATIC")," INFO field. The ",(0,o.kt)("inlineCode",{parentName:"p"},"GT")," fields for ",(0,o.kt)("inlineCode",{parentName:"p"},"SOMATIC")," variants and any other variants in the same phase set (",(0,o.kt)("inlineCode",{parentName:"p"},"PS"),") are augmented with the number of unique somatic haplotypes inferred (somatic haplotypes are identified with the ",(0,o.kt)("inlineCode",{parentName:"p"},"HSS")," tag). For example, in the following VCF:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'##fileformat=VCFv4.3\n##INFO=<ID=SOMATIC,Number=0,Type=Flag,Description="Record includes a somatic mutation">\n##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">\n##FORMAT=<ID=PS,Number=1,Type=String,Description="Phase set">\n##FORMAT=<ID=HSS,Number=.,Type=Integer,Description="Somatic status for each haplotype">\n#CHROM POS ID REF ALT QUAL FILTER INFO FORMAT NORMAL TUMOUR\n1 50  . G  A   . . SOMATIC GT:PS:HSS   0|0:50:0,0    1|0|0:50:1,0,0\n1 100 . A  C   . . SOMATIC GT:PS:HSS   0|0:100:0,0   0|0|0|1:100:0,0,1,1\n1 150 . G  T   . . .       GT:PS:HSS   1|0:100:0,0   1|0|1|0:100:0,0,1,1\n1 200 . A  AC  . . SOMATIC GT:PS:HSS   0|0:100:0,0   0|0|1|0:100:0,0,1,1\n1 250 . TA T   . . .       GT:PS:HSS   1|1:100:0,0   1|1|1|1:100:0,0,1,1\n2 300 . C  A,T . . SOMATIC GT:PS:HSS   0|2:300:0,0   1|0|2:300:1,0,0\n2 350 . G  T   . . .       GT:PS:HSS   0|1:300:0,0   0|0|1:300:1,0,0\n2 400 . T  C   . . SOMATIC GT:PS:HSS   0|0:300:0,0   1|0|0:300:1,0,0\n3 100 . A  C   . . SOMATIC GT:PS:HSS   0|0:100:0,0   0|0|1|1:100:0,0,1,1\n3 150 . C  CC  . . SOMATIC GT:PS:HSS   0|0:100:0,0   0|0|1|0:100:0,0,1,1\n3 200 . G  T   . . .       GT:PS:HSS   0|1:100:0,0   0|1|1|1:100:0,0,1,1\n4 100 . C  T   . . .       GT:PS:HSS   0|1:100:0,0   0|1|1|1:100:0,1,1,0\n4 150 . A  G   . . SOMATIC GT:PS:HSS   0|0:100:0,0   0|0|1|0:100:0,1,1,0\n4 200 . A  G   . . SOMATIC GT:PS:HSS   0|0:100:0,0   0|1|0|0:100:0,1,1,0\n')),(0,o.kt)("p",null,"The first phase set ",(0,o.kt)("inlineCode",{parentName:"p"},"1:50")," includes a simple somatic mutation; it is not phased with any other variants. Downstream of this is another phase block starting at ",(0,o.kt)("inlineCode",{parentName:"p"},"1:100")," that includes 2 germline and 2 somatic variants. The first somatic mutation in this phase set at ",(0,o.kt)("inlineCode",{parentName:"p"},"1:100")," is phased onto the germline haplotype including the reference allele at the germline variant at ",(0,o.kt)("inlineCode",{parentName:"p"},"1:150"),". The second somatic mutation in this phase set is phased with the alternate allele of this germline variant. In the third phase set stating at ",(0,o.kt)("inlineCode",{parentName:"p"},"2:300")," there is a somatic mutation that segregates with a germline variant at the same position, and another somatic mutation which is phased onto the same germline haplotype - the reference. The somatic allele in the multiallelic record is determined by looking at the ",(0,o.kt)("inlineCode",{parentName:"p"},"HSS"),' flags (1 indicates somatic), so "C>A" is the somatic mutation in this case. The third phase set starting at ',(0,o.kt)("inlineCode",{parentName:"p"},"3:100")," includes 2 somatic mutations phased onto the same germline haplotype, but the first somatic mutation was inferred to segregate with both the germline allele and somatic allele at ",(0,o.kt)("inlineCode",{parentName:"p"},"3:150"),", suggests linear progression of the C>CC somatic mutation. The last phase set starting at ",(0,o.kt)("inlineCode",{parentName:"p"},"4:100")," includes 2 somatic mutations phased onto the same germline haplotype, but not with each other."),(0,o.kt)("h2",{id:"qual-vs-pp"},(0,o.kt)("inlineCode",{parentName:"h2"},"QUAL")," vs ",(0,o.kt)("inlineCode",{parentName:"h2"},"PP")),(0,o.kt)("p",null,"For both paired and tumour-only calling, octopus reports two quality scores for each call (both germline and somatic):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QUAL")," is the posterior probability the variant is ",(0,o.kt)("em",{parentName:"li"},"segregating")," in the sample regardless of somatic classification."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PP")," (an ",(0,o.kt)("inlineCode",{parentName:"li"},"INFO")," field) is the posterior probability the variant is segregating ",(0,o.kt)("strong",{parentName:"li"},"and")," classified correctly.")),(0,o.kt)("p",null,"The difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PP")," indicates the uncertainty in the calls classification; a call may have high ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL")," but low ",(0,o.kt)("inlineCode",{parentName:"p"},"PP")," if the classification is uncertain (common in tumour-only calling or if the normal coverage is low). ",(0,o.kt)("inlineCode",{parentName:"p"},"PP")," should always be less than ",(0,o.kt)("inlineCode",{parentName:"p"},"QUAL")," in theory."),(0,o.kt)("h2",{id:"hpc-map_hf-and-hf_cr"},(0,o.kt)("inlineCode",{parentName:"h2"},"HPC"),", ",(0,o.kt)("inlineCode",{parentName:"h2"},"MAP_HF")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"HF_CR")),(0,o.kt)("p",null,"Octopus infers a probability distribution over haplotype frequencies, including any somatic haplotypes. For each variant in a phase-block with a ",(0,o.kt)("inlineCode",{parentName:"p"},"SOMATIC")," variant, three statistics are reported that relate to haplotype frequency (per haplotype)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HPC")," is the Dirichlet posterior pseudo-count. Note that this count includes the prior count so should not be taken to mean the empirical count."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MAP_HF")," (",(0,o.kt)("inlineCode",{parentName:"li"},"FORMAT"),") is the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation"},"Maximum a Posteriori")," haplotype frequency point estimate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HF_CR")," (",(0,o.kt)("inlineCode",{parentName:"li"},"FORMAT"),") is a ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Credible_interval"},"credible interval")," of the haplotypes frequency. The mass of the credible interval is specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"--credible-mass"),". The credible interval gives you an indication of how certain the MAP_HF estimate is; A very narrow interval means the MAP estimate is very certain, a wide interval means it is uncertain.")),(0,o.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of genotypes considered by the model ",(0,o.kt)("inlineCode",{parentName:"li"},"--max-genotype")," has a significant impact on overall runtime."),(0,o.kt)("li",{parentName:"ul"},"The parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"--max-somatic-haplotypes")," controls the maximum number of unique segregating somatic haplotypes to be modelled. There must be at-least one somatic haplotype, but adding more can resolve somatic mutations falling on different germline haplotypes or multiple distinct haplotypes due to sub clonal evolution. ")),(0,o.kt)("h2",{id:"somatics-only"},"SOMATICs only"),(0,o.kt)("p",null,"To report only ",(0,o.kt)("inlineCode",{parentName:"p"},"SOMATIC")," calls just add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--somatics-only")," command. This will only work if calls are beings filtered already (i.e. it will have no effect if ",(0,o.kt)("inlineCode",{parentName:"p"},"-f off"),"). It is generally not recommended to use this option until you are 100% satisfied with your calls, as call filtering will not work correctly if germline variants have been filtered from the VCF; you will not be able to re-filter your SOMATIC-only VCF."))}c.isMDXComponent=!0}}]);