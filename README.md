# userdata-extractor

An npm package that runs in the browser, to extract contents of user's social data in a meaningful way.

## Development

```sh
# Install dependencies
yarn install

# Run tests 
yarn test
```

## Create a new release
> TODO

## Usage
> TODO

## General TODOs
- Instagram exports either all HTML or all JSON. Need extractors for both
- Check non-english exports. Perhaps the column names will be different

## Current Coverage

### JSON
```
.
├── account_information
│   ├── account_information.json      ✅
│   ├── personal_information.json     ✅
│   ├── professional_information.json ❌ (no data example)
│   └── profile_changes.json          ✅
├── ads_and_businesses
│   └── advertisers_using_your_activity_or_information.json  ✅
├── ads_and_topics
│   ├── accounts_you're_not_interested_in.json
│   ├── ads_clicked.json
│   ├── ads_viewed.json
│   ├── posts_viewed.json
│   └── videos_watched.json
├── apps_and_websites
│   └── active_apps.json
├── autofill_information
│   └── no-data.txt
├── avatars_store
│   └── no-data.txt
├── blockchain_accounts
│   └── no-data.txt
├── comments
│   └── post_comments.json
├── comments_settings
│   ├── comments_allowed_from.json
│   └── use_cross-app_messaging.json
├── contacts
│   └── synced_contacts.json
├── content
│   ├── posts_1.json
│   ├── profile_photos.json
│   └── stories.json
├── device_information
│   ├── camera_information.json
│   └── devices.json
├── events
│   └── no-data.txt
├── followers_and_following
│   ├── blocked_accounts.json
│   ├── followers.json
│   ├── following.json
│   ├── pending_follow_requests.json
│   ├── recent_follow_requests.json
│   └── recently_unfollowed_accounts.json
├── fundraisers
│   └── no-data.txt
├── guides
│   └── no-data.txt
├── information_about_you
│   ├── account_based_in.json ✅
│   └── ads_interests.json    ✅
├── likes
│   ├── liked_comments.json
│   └── liked_posts.json
├── login_and_account_creation
│   ├── login_activity.json   ✅
│   ├── logout_activity.json
│   ├── password_change_activity.json
│   └── signup_information.json
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
│   └── eligibility.json
├── past_instagram_insights
│   └── no-data.txt
├── recent_searches
│   └── account_searches.json
├── reports
│   └── no-data.txt
├── saved
│   └── saved_posts.json
├── shopping
│   └── recently_viewed_items.json
├── story_sticker_interactions
│   ├── emoji_sliders.json
│   ├── polls.json
│   ├── questions.json
│   └── quizzes.json
└── your_topics
    ├── your_reels_sentiments.json  ✅
    └── your_reels_topics.json      ✅
```

### HTML
```
// TODO: add coverage
```