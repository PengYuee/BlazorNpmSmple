
const moduleJsList: string[] =
    [
        `./js/common.js`
    ]

function loadJs() {
    for (let i of moduleJsList) {
        let el = document.createElement('script');
        el.setAttribute('src', i);
        document.head.appendChild(el);
    }
}

export function beforeWebStart() {
    console.log("开始加载js")
    loadJs();
}
