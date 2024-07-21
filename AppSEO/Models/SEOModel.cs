using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LeanDX.Site.Models
{
    public class SEOModel
    {
        public string Description { get; set; }
        public string Author { get; set; }

        //OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+
        /// <summary>
        ///  <!-- website name -->
        /// </summary>
        public string OgSiteName { get; set; }
        /// <summary>
        /// <!-- website link -->
        /// </summary>
        public string OgSite { get; set; }
        /// <summary>
        /// <!-- title shown in the actual shared post -->
        /// </summary>
        public string OgTitle { get; set; }
        /// <summary>
        /// <!-- description shown in the actual shared post -->
        /// </summary>
        public string OgDescription { get; set; }
        /// <summary>
        /// <!-- image link, make sure it's jpg -->
        /// </summary>
        public string OgImage { get; set; }
        /// <summary>
        /// <!-- where do you want your post to link to -->
        /// </summary>
        public string OgUrl { get; set; }
        public string OgType { get; set; }
    }
}