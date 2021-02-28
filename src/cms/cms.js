import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import StrategyPostPreview from "./preview-templates/StrategyPostPreview";
import ProductPostPreview from "./preview-templates/ProductPostPreview";
import MarketingPostPreview from "./preview-templates/MarketingPostPreview";
import OperationPostPreview from "./preview-templates/OperationPostPreview";

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("strategy", StrategyPostPreview);
CMS.registerPreviewTemplate("product", ProductPostPreview);
CMS.registerPreviewTemplate("marketing", MarketingPostPreview);
CMS.registerPreviewTemplate("operation", OperationPostPreview);
