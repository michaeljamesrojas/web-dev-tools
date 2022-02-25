// background.js

chrome.runtime.onInstalled.addListener(() => {
    let color = '#3aa757';
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});