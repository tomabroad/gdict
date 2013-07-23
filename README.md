# Gdict
Google Chrome Extension for looking up the selected text on the browser.

## Feature
* Right-click to look up the selected text online
* Browse the search history

## Download
1. Visit the release page [https://github.com/tomabroad/gdict/releases](https://github.com/tomabroad/gdict/releases)
2. Download the latest zip file and unzip it
3. Place the file anywhere on the local drive

![download](/img/download.png)

## Setup
1. Visit [chrome://extensions](chrome://extensions) in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox and select Extensions under the Tools menu to get to the same place).
2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
3. Click Load unpacked extension… to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.

> Getting Started: Building a Chrome Extension - Load the extension
http://developer.chrome.com/extensions/getstarted.html#unpacked

![select extension](/img/select_extension.png)

![setup](/img/setup.png)

## Usage
#### Search terms
Select the text you want to check, right-click on it, and click on Gdict button. A new window will be open with the search result. To customize the dictionary, click the gdict's icon to the right of the Omnibox to show the dialog, and choose the dictionary you want to use.

![search](/img/search.png)

#### Browse history
Click the gdict's icon to the right of the Omnibox to show the dialog. The search history will be displayed in the text-area. Clear the history by clicking the clear button. (Duplicated terms are not stored)

![popup](/img/popup.png)

## Version
See manifest.json

## License
MIT licensed
See LICENSE for detail
