// ==UserScript==
// @name         Fix h-less & t-less Links
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  tps:// や ttps:// などのURLを補完してリンク化する
// @author       あなたの名前
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function convertLinks(node) {
        if (!node || node.nodeType !== Node.TEXT_NODE) return;

        let text = node.nodeValue;
        let newHtml = text
            .replace(/\b(tps?:\/\/[^\s]+)/g, (match, p1) => {
                return `<a href="ht${p1}" target="_blank" rel="noopener noreferrer">ht${p1}</a>`;
            })
            .replace(/\b(ttps?:\/\/[^\s]+)/g, (match, p1) => {
                return `<a href="h${p1}" target="_blank" rel="noopener noreferrer">h${p1}</a>`;
            })
            .replace(/\b(ttp:\/\/[^\s]+)/g, (match, p1) => {
                return `<a href="h${p1}" target="_blank" rel="noopener noreferrer">h${p1}</a>`;
            });

        if (newHtml !== text) {
            let span = document.createElement('span');
            span.innerHTML = newHtml;
            node.replaceWith(span);
        }
    }

    function processNodes(root) {
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            convertLinks(node);
        }
    }

    function observeChanges() {
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        convertLinks(node);
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        processNodes(node);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // 初回処理
    processNodes(document.body);
    observeChanges();

})();
