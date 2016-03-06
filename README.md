# Installation
I assume you use OS X since this is a React Native iOS application.
* Install XCode
* Install homebrew
* Install nvm
* `nvm install node && nvm alias default node`
* `brew install watchman` We recommend installing watchman, otherwise you might hit a node file watching bug.
* `npm install -g react-native-cli`
* `git clone git@github.com:StefanWallin/hm.git`
* `cd hm/HM`
* `open ios/HM.xcodeproj`

# Run tests
`npm test`


# Instructions from React bootstrapping script:

## To run your app on iOS:
* `cd hm/HM2`
* react-native run-ios
- or -
* Open /Users/festiz/gitstuff/hm/HM2/ios/HM2.xcodeproj in Xcode
* Hit the Run button

## To run your app on Android:
* Have an Android emulator running (quickest way to get started), or a device connected
* cd /Users/festiz/gitstuff/hm/HM2
* react-native run-android
