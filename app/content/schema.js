export const NAV_ANCHORS = ["#home", "#blog", "#game", "#music", "#images", "#favorites", "#contact"];

export const BLOG_CATEGORIES = ["AI", "Web3", "网络基础", "电脑装机", "运动健身", "营养补剂"];

export const PROGRESS_STATUSES = ["done", "partial", "todo"];

export const UPCOMING_SECTION_IDS = ["music", "images", "favorites"];

/**
 * @typedef {"AI"|"Web3"|"网络基础"|"电脑装机"|"运动健身"|"营养补剂"} BlogCategory
 */

/**
 * @typedef {"done"|"partial"|"todo"} ProgressStatus
 */

/**
 * @typedef {Object} HeroAction
 * @property {string} label
 * @property {string} href
 * @property {string} track
 */

/**
 * @typedef {Object} HeroContent
 * @property {string} eyebrow
 * @property {string} title
 * @property {string} summary
 * @property {HeroAction} primaryAction
 * @property {HeroAction} secondaryAction
 */

/**
 * @typedef {Object} UpcomingSection
 * @property {"music"|"images"|"favorites"} id
 * @property {string} title
 * @property {string} statusLabel
 * @property {string} intro
 * @property {string[]} topics
 */

/**
 * @typedef {Object} SiteMeta
 * @property {string} name
 * @property {string} locale
 * @property {string} domain
 * @property {string} title
 * @property {string} description
 * @property {string} tagline
 * @property {string} taglineHighlight
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} platform
 * @property {string} label
 * @property {"github"|"twitter"|"gmail"} iconKey
 * @property {string} url
 */

/**
 * @typedef {Object} NavLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} title
 * @property {string} date
 * @property {string} summary
 * @property {string} cover
 * @property {string} url
 * @property {BlogCategory} category
 * @property {string[]} tags
 */

/**
 * @typedef {Object} GameEntry
 * @property {string} title
 * @property {string} summary
 * @property {string=} cover
 * @property {string} posterColor
 * @property {boolean} featuredOnHome
 * @property {number|null} featuredOrder
 */

/**
 * @typedef {Object} MusicEntry
 * @property {string} title
 * @property {string} summary
 * @property {string} cover
 * @property {string} url
 */

/**
 * @typedef {Object} ImageEntry
 * @property {string} title
 * @property {string} desc
 * @property {string} image
 * @property {string} url
 * @property {string} category
 */

/**
 * @typedef {Object} FavoriteItem
 * @property {string} title
 * @property {string} subtitle
 * @property {string} desc
 * @property {string} cover
 * @property {string} url
 */

/**
 * @typedef {Object} FavoriteGroup
 * @property {string} group
 * @property {FavoriteItem[]} items
 */

/**
 * @typedef {Object} ProgressPhase
 * @property {string} id
 * @property {string} name
 * @property {number} weight
 * @property {ProgressStatus} status
 */
