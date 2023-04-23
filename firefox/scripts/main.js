const blueCheck='M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z';
const promoted='M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z';

let removeExplore, removeCommunities, removeTwitterBlue, removeBookmarkButton, removeVerifiedOrganizations, removeAds, removeBookmarks, removeElonSimps, removeMusk, removeViews;
function getSettings(){
    browser.storage.sync.get({ removeExplore: false, removeCommunities: true, removeTwitterBlue: true, removeVerifiedOrganizations: true, removeAds: true, removeElonSimps: true, removeMusk: true, removeViews: false, removeBookmarks: false, removeBookmarkButton: true }).then((items) => {
    console.log(items)
        removeExplore = items.removeExplore;
        removeCommunities = items.removeCommunities;
        removeTwitterBlue = items.removeTwitterBlue;
        removeVerifiedOrganizations = items.removeVerifiedOrganizations;
        
        removeAds = items.removeAds;
        removeElonSimps = items.removeElonSimps;
        removeMusk = items.removeMusk;
        
        removeViews = items.removeViews;
        removeBookmarks = items.removeBookmarks;
        removeBookmarkButton = items.removeBookmarkButton;
    })
}
function fixNavBar(){
    let explore = document.querySelector('[href="/explore"]')
    let communities = document.querySelector('[href="/' + document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-usiww2 > div > div > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 > div > div > div > span').innerText.replace("@",'') + '/communities"]')
    let twitterBlue = document.querySelector('[href="/i/twitter_blue_sign_up"]')
    let verifiedOrganizations = document.querySelector('[href="/i/verified-orgs-signup"]')

    if (removeVerifiedOrganizations){
        verifiedOrganizations.remove()
    }
    if (removeTwitterBlue){
        twitterBlue.remove()
    }
    if (removeExplore){
        explore.remove()
    }
    if (removeCommunities){
        communities.remove()
    }
}

function removeTweets(){
    let tweets = document.querySelectorAll('[data-testid="tweet"]')
    tweets.forEach((tweet)=>{
        if (tweet.getInnerHTML().includes(blueCheck) && removeElonSimps===true){
            return tweet.innerHTML = '';
        } else if (tweet.getInnerHTML().includes(promoted) && removeAds){
            return tweet.innerHTML = '';
        } else if (tweet.getInnerHTML().includes('href="/elonmusk"') && removeMusk){
            return tweet.innerHTML = '';
        }
    })
}
function removeViewsAndBookmarks(){
    if (removeViews || removeBookmarkButton || removeBookmarks){
        let buttons = document.querySelectorAll('div.css-1dbjc4n.r-18u37iz.r-1h0z5md');
        buttons.forEach((button)=>{
            if (removeViews && button.getInnerHTML().includes('M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z')){
                button.remove();
            } else if (removeBookmarkButton && button.getInnerHTML().includes('M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z')){
                button.remove();
            }
        })
        if (removeViews && document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-1r5su4o > div > div.css-1dbjc4n.r-1b7u577 > div > div.css-901oao.r-14j79pv.r-1q142lx.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-s1qlax.r-qvutc0') != null){
            document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-1r5su4o > div > div.css-1dbjc4n.r-1b7u577 > div > div.css-901oao.r-14j79pv.r-1q142lx.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-s1qlax.r-qvutc0').remove();
        }
        if (removeViews && document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-1r5su4o > div > div.css-1dbjc4n.r-1b7u577 > div > div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0') != null){
            document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-1r5su4o > div > div.css-1dbjc4n.r-1b7u577 > div > div.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0').remove();
        }
        if (removeBookmarks && document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-18u37iz.r-1w6e6rj > div:nth-child(4)')){
            document.querySelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div.css-1dbjc4n.r-18u37iz.r-1w6e6rj > div:nth-child(4)').innerHTML = '';
        }
    }
}
console.log('test')
new PerformanceObserver(() => {
console.log('te2st')
    getSettings();
    fixNavBar();
    removeTweets();
    removeViewsAndBookmarks();
}).observe({type: 'largest-contentful-paint', buffered: true});

document.addEventListener('scroll', ()=>{removeTweets(); removeViewsAndBookmarks()});


