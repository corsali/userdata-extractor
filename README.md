# userdata-extractor

An npm package that runs in the browser, to extract contents of user's social data in a meaningful way.

# Development

## Local setup

```sh
# Install dependencies
yarn install

# Run tests
yarn test
```

## Adding a new extractor

- Copy/paste an existing extractor in the appropriate `extractor/<integration>/<html|json>/` directory
- Initialize the extractor at the bottom of the file, ex:

```js
export const accountInformationJson = new AccountInformationJson(
  config.SERVICE_INSTAGRAM, // integration name
  "account_information/account_information.json", // File regex
  "account_information" // Table name
);
```

- Add the extractor to `src/extractor/<integration>/index.ts`

## Adding new sample data

When adding sample data (ex: `tests/data/social.zip`), please ensure all PII and media has been stripped out. Here are some CLI commands to speed up this process.

```bash
# Find and replace text in all json files recursively, starting from current directory
find . -name '*.json' -print0 | xargs -0 perl -pi -e 's/FIND_TEXT/REPLACE_WITH/g'

# Remove all jpg files recursively, starting from current directory
find . -type f -name '*.jpg' -delete
```

## Development notes

- All project file imports must end in `.js`, ex:
  `import { Table } from "../models/table/index.js";`

# Deployment

## Create a new release

When we're ready to release a new version of this package, visit [Github Releases](https://github.com/corsali/userdata-extractor/releases/new). Enter the following:

- Create a tag (ex: v0.0.2)
- Enter a release title: same as tag (ex: v0.0.2)
- Enter a description in this format:

```
# v0.0.2 - July 14, 2022
- Added a feature
- Fixed a bug
```

- Publish release. A github action will be triggered that creates the package.

## Usage

> TODO

## General TODOs

- Instagram exports either all HTML or all JSON. Need extractors for both
- Check non-english exports. Perhaps the column names will be different

# Current Coverage

### JSON

```
Instagram
├── account_information (see 2nd zip test file - these are in personal_information/)
│   ├── account_information.json      ✅
│   ├── linked_meta_accounts.json (from personal_information/) ✅
│   ├── personal_information.json     ✅
│   ├── professional_information.json ❌ (no data example)
│   └── profile_changes.json          ✅
├── ads_and_businesses
│   └── advertisers_using_your_activity_or_information.json  ✅
├── ads_and_topics
│   ├── accounts_you're_not_interested_in.json
│   ├── ads_clicked.json ✅
│   ├── ads_viewed.json ✅
│   ├── posts_viewed.json ✅
│   └── videos_watched.json ✅
├── apps_and_websites
│   ├── active_apps.json
│   └── expired_pps.json ✅
├── autofill_information
│   └── autofill_information.json ✅
├── avatars_store
│   └── no-data.txt
├── blockchain_accounts
│   └── no-data.txt
├── comments
│   └── post_comments.json  ✅
├── comments_settings
│   ├── comments_allowed_from.json  ✅
│   └── use_cross-app_messaging.json  ✅
├── contacts
│   └── synced_contacts.json
├── content
│   ├── posts_1.json
│   ├── profile_photos.json  ✅
│   └── stories.json  ✅
├── device_information
│   ├── camera_information.json ✅
│   └── devices.json  ✅
├── events
│   └── no-data.txt
├── followers_and_following
│   ├── blocked_accounts.json ✅
│   ├── close_friends.json ✅
│   ├── followers.json  ✅
│   ├── following.json  ✅
│   ├── following_hashtags.json  ✅
│   ├── pending_follow_requests.json
│   ├── recent_follow_requests.json ✅
│   ├── recently_unfollowed_accounts.json ✅
│   └── removed_suggestions.json ✅
├── fundraisers
│   └── no-data.txt
├── guides
│   └── no-data.txt
├── information_about_you
│   ├── account_based_in.json ✅
│   ├── ads_interests.json    ✅
│   └── possible_phone_numbers.json ✅
├── likes
│   ├── liked_comments.json ✅
│   └── liked_posts.json ✅
├── login_and_account_creation
│   ├── account_privacy_changes.json ✅
│   ├── login_activity.json   ✅
│   ├── logout_activity.json  ✅
│   ├── password_change_activity.json ✅
│   └── signup_information.json ✅
├── loyalty_accounts
│   └── no-data.txt
├── media ❌ (skipping non-text formats)
├── messages
│   ├── inbox
│   │   ├── instagram-username_u2df5hj
│   │   │   ├── message_1.json
│   │   │   └── photos
│   │   │       ├── pic1.jpg
│   │   │       └── pic2.jpg
│   │   │   └── videos
│   │   │       └── video.mp4
│   ├── message_requests
│   │   ├── instagramuser_fpaxg_gl0a
│   │   │   └── message_1.json
│   ├── secret_conversations.json
│   └── secret_groups.json
├── monetization
│   └── eligibility.json ✅
├── past_instagram_insights
│   ├── accounts_reached.json ✅
│   ├── audience_insights.json ✅
│   └── content_interactions.json ✅
├── recent_searches
│   ├── account_searches.json
│   ├── tag_searches.json ✅
│   └── word_or_phrase_searches.json ✅
├── reports
│   └── no-data.txt
├── saved
│   ├── saved_collections.json ✅
│   └── saved_posts.json ✅
├── shopping
│   └── recently_viewed_items.json ✅
├── story_sticker_interactions
│   ├── emoji_sliders.json
│   ├── polls.json
│   ├── questions.json
│   └── quizzes.json
└── your_topics
    ├── your_reels_sentiments.json  ✅
    └── your_reels_topics.json      ✅


Facebook
├── activity_messages
│   ├── group_interactions.json ✅
│   └── people_and_friends.json ✅
├── ads_information
│   ├── advertisers_using_your_activity_or_information.json ✅
│   ├── advertisers_you've_interacted_with.json ✅
│   ├── information_you've_submitted_to_advertisers.json ✅
│   └── other_categories_used_to_reach_you.json ✅
├── apps_and_websites_off_of_facebook
│   ├── apps_and_websites.json ✅
│   ├── your_apps.json ✅
│   ├── your_off-facebook_activity.json ✅
│   └── posts_from_apps_and_websites.json ✅
├── comments_and_reactions
│   ├── comments.json
│   └── posts_and_comments.json
├── events
│   ├── event_invitations.json ✅
│   ├── your_events.json ✅
│   └── your_event_responses.json ✅
├── facebook_accounts_center
│   └── accounts_center.json ✅
├── facebook_gaming
│   ├── instant_games.json ✅
│   └── gaming_profile.json ✅
├── facebook_marketplace
│   ├── buyer_and_seller_ratings.json ✅
│   ├── items_sold.json ✅
│   ├── marketplace_notifications.json ✅
│   └── seller_information.json ✅
├── facebook_news
│   ├── time_spent.json ✅
│   ├── your_locations.json ✅
├── facebook_payments
│   └── payment_history.json - not enough data
├── friends_and_followers
│   ├── friends.json ✅
│   ├── friend_requests_received.json ✅
│   ├── friend_requests_sent.json ✅
│   ├── rejected_friend_requests.json ✅
├── groups
│   ├── creator_badges.json ✅
│   ├── your_comments_in_groups.json ✅
│   └── your_group_membership_activity.json ✅
├── location
│   ├── primary_location.json ✅
│   ├── primary_public_location.json ✅
│   └── timezone.json ✅
├── notifications
│   ├── notifications.json ✅
│   └── notifications_of_meta_privacy_policy_update.json
├── other_logged_information
│   ├── ads_interests.json ✅
│   └── friend_peer_group.json
├── other_personal_information
│   └── your_address_books.json ✅
├── pages_and_profiles
│   ├── pages_and_profiles_you_follow.json ✅
│   ├── pages_you've_liked.json ✅
│   └── your_pages_and_profiles.json ✅
├── polls
│   └── polls_you_voted_on.json
├── posts
│   └── too complex - figure out which data we want
├── preferences
│   └── language_and_locale.json ✅
├── profile_information
│   ├── profile_information.json - complex, might require multiple tables
│   └── profile_update_history.json ✅
├── saved_items_and_collections
│   ├── collections.json - not enough data
│   └── your_saved_items.json ✅
├── search
│   └── your_search_history.json ✅
├── security_and_login_information
│   ├── account_activity.json ✅
│   ├── browser_cookies - later
│   ├── ip_address_activity.json ✅
│   ├── logins_and_logouts.json ✅
│   ├── login_protection_data.json ✅
│   ├── mobile_devices.json ✅
│   └── record_details.json ✅
│   ├── where_you're_logged_in.json ✅
│   └── your_facebook_activity_history.json ✅
├── your_interactions_on_facebook
│   └── recently_visited.json
│   │   ├── Profile visits ✅
│   │   ├── Page visits ✅
│   │   ├── Events visited ✅
│   │   ├── Groups visited ✅
│   │   ├── Marketplace Visits ✅
│   │   ├── videos ✅
│   │   ├── posts and articles ✅
│   │   ├── marketplace interactions (not items) ✅
│   │   ├── marketplace items ✅
│   │   ├── ads ✅
│   ├── removed_friends.json ✅
│   └── who_you_follow.json ✅
├── groups
│   ├── creator_badges.json ✅
│   ├── your_comments_in_groups.json ✅
│   └── your_group_membership_activity.json ✅
├── location
│   ├── primary_location.json ✅
│   ├── primary_public_location.json ✅
│   └── timezone.json ✅
├── notifications
│   ├── notifications.json ✅
│   └── notifications_of_meta_privacy_policy_update.json
├── other_logged_information
│   ├── ads_interests.json ✅
│   └── friend_peer_group.json
├── other_personal_information
│   └── your_address_books.json ✅
├── pages_and_profiles
│   ├── pages_and_profiles_you_follow.json ✅
│   ├── pages_you've_liked.json ✅
│   └── your_pages_and_profiles.json ✅
├── activity_messages
│   ├── group_interactions.json
│   └── people_and_friends.json
├── comments_and_reactions
│   ├── comments.json ✅
│   └── posts_and_comments.json ✅
├── profile_information
│   └── profile_information.json
│       ├── simple (1:1) data ✅
│       ├── relationships ✅
│       ├── work experience ✅
│       └── education experiences ✅
├── your_topics
    └── your_topics.json ✅
```

### HTML

```
// TODO: add coverage
```
