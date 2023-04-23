const saveOptions = () => {

    const explore = document.getElementById('explore').checked;
    const communities = document.getElementById('communities').checked;
    const twitterBlue = document.getElementById('twitter-blue').checked;
    const verifiedOrganizations = document.getElementById('verified-organizations').checked;
    
    const ads = document.getElementById('ads').checked;
    const elonSimps = document.getElementById('elon-simps').checked;
    const musk = document.getElementById('musk').checked;
    
    const views = document.getElementById('views').checked;
    const bookmarks = document.getElementById('bookmarks').checked;
    const bookmarkButton = document.getElementById('bookmark-button').checked;
    console.log(explore)
    chrome.storage.sync.set(
        {
            removeExplore: explore,
            removeCommunities: communities,
            removeTwitterBlue: twitterBlue,
            removeVerifiedOrganizations: verifiedOrganizations,
            removeAds: ads,
            removeElonSimps: elonSimps,
            removeMusk: musk,
            removeViews: views,
            removeBookmarks: bookmarks,
            removeBookmarkButton: bookmarkButton
        },
        () => {
            const status = document.getElementById('status');
            status.textContent = 'Options saved. Refresh the page!';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    )
}

const restoreOptions = () => {
    chrome.storage.sync.get(
    { removeExplore: false, removeCommunities: true, removeTwitterBlue: true, removeVerifiedOrganizations: true, removeAds: true, removeElonSimps: true, removeMusk: true, removeViews: false, removeBookmarks: false, removeBookmarkButton: true }, (items) => {
            document.getElementById('explore').checked = items.removeExplore;
            document.getElementById('communities').checked = items.removeCommunities;
            document.getElementById('twitter-blue').checked = items.removeTwitterBlue;
            document.getElementById('verified-organizations').checked = items.removeVerifiedOrganizations;
            
            document.getElementById('ads').checked = items.removeAds;
            document.getElementById('elon-simps').checked = items.removeElonSimps;
            document.getElementById('musk').checked = items.removeMusk;
            
            document.getElementById('views').checked = items.removeViews;
            document.getElementById('bookmarks').checked = items.removeBookmarks;
            document.getElementById('bookmark-button').checked = items.removeBookmarkButton;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
