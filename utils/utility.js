import { useRef, useEffect } from 'react';

class Utils {
    static getTaggedUsers(message, users) {
        return users && users.filter(user => message.indexOf(`@[${user.name}](${user.id})`) >= 0);
    }

    static removeUserMarkup(message, taggedUsers) {
        if (!taggedUsers || !taggedUsers.length) {
            return message;
        }
        for (const taggedUser of taggedUsers) {
            const regexp = RegExp(`@\\[${taggedUser.name}\\]\\(${taggedUser.id}\\)`, 'g');
            const matches = [...message.matchAll(regexp)];
            for (const match of matches) {
                message = message.replace(match[0], taggedUser.name);
            }
        }
        return message;
    }

    static modifyMessageWithUsers(message, taggedUsers) {
        if (!taggedUsers || !taggedUsers.length) {
            return message;
        }
        const taggedUserNames = taggedUsers.map(user => user.name);
        const splittedString = message.split(new RegExp(`(${taggedUserNames.join('|')})`, 'g'));
        let newString = '';
        for (let str of splittedString) {
            if (taggedUserNames.includes(str)) {
                const user = taggedUsers.find(user => user.name === str);
                newString += `@[${str}](${user.id})`;
            } else {
                newString += `${str}`;
            }
        }
        return newString;
    }

    static uniqueArray(items, key) {
        const uniqObj = {};
        return items.filter(item => {
            const id = item[key];
            return uniqObj[id] ? false : (uniqObj[id] = true)
        })
    }

    static getPageNum(existingPages, currentPageNum, index, operator = 'increment') {
        let pageNum = currentPageNum;
        while (pageNum > -1) {
            if (operator === 'increment') {
                pageNum += index;
            } else if (operator === 'decrement') {
                pageNum -= index;
            }
            if (!existingPages[pageNum]) {
                break;
            }
            continue;
        }
        return pageNum;
    }

    // this is custom function to get the prev value while using react hooks
    static usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    static getKeyValuePairFromArray(items, key) {
        return items.reduce((acc, item) => {
            const objKey = item[key];
            return {
                ...acc,
                [objKey]: item
            }
        }, {});
    }

    static convertToCapitalCase(str) {
        const parts = str.split(' ');
        const capitalParts = parts.map(part => part[0].toUpperCase() + part.slice(1).toLowerCase());
        return capitalParts.join(' ');
    }
}

export default Utils;