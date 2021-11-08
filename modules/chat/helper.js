import { getTimeStamp } from '../../utils/timestamp';
import Utils from '../../utils/utility';

export const makeReplyItems = (replies) => {
    const formattedReplies = [];

    if (!replies || !replies.length) {
        return formattedReplies;
    }
    if (replies.length === 0) {
        return formattedReplies;
    }

    replies.forEach(reply => {
        const { id, name } = reply.updated_by;
        const attachments = [];
        reply.attachments && reply.attachments.forEach(
            attachment => attachments.push({ id: attachment.id, name: attachment.filename })
        );
        const replyObject = {
            messageId: reply.id,
            avatar: name.split(' ').map(i => i.charAt(0)),
            author: name,
            userId: id,
            userType: 'internal',
            text: Utils.modifyMessageWithUsers(reply.body, reply.tagged_users),
            taggedUsers: reply.tagged_users,
            attachments,
            createdAt: getTimeStamp(reply.created_at),
            updatedAt: getTimeStamp(reply.updated_at),
            taggedUsers: reply.tagged_users.length > 0 ? reply.tagged_users : [],
            reference: reply.reference
        }
        formattedReplies.push(replyObject);
    })
    return formattedReplies;
}

export const makeMessage = (message) => {
    const { id, name } = message.created_by;
    const attachments = [];
    message.attachments && message.attachments.forEach(
        attachment => attachments.push({ id: attachment.id, name: attachment.filename })
    );

    const messageObject = {
        messageId: message.id,
        avatar: name.split(' ').map(i => i.charAt(0)),
        author: name,
        userId: id,
        userType: 'internal',
        text: Utils.modifyMessageWithUsers(message.body, message.tagged_users),
        taggedUsers: message.tagged_users.length > 0 ? message.tagged_users : [],
        attachments,
        createdAt: getTimeStamp(message.created_at),
        updatedAt: getTimeStamp(message.updated_at),
        reference: message.reference
    }

    // support only 1 level replies
    if (message.replies_to === "") {
        messageObject.replyItems = makeReplyItems(message.replies) || [];
    } else {
        messageObject.isReply = true;
        messageObject.repliesTo = message.replies_to
    }
    return messageObject;
}

export const makeMessages = (messages) => {
    const chatItems = [];

    messages.map((message) => {
        chatItems.push(makeMessage(message))
    });

    return chatItems;
}

export const makePostMessagePayload = (messageBody) => {
    const { message, users, attachments, reference, appId, roomId, repliesTo } = messageBody;
    const attachmentPayload = [];
    attachments && attachments.forEach(
        attachment => {
            if (!attachment.error) {
                attachmentPayload.push({
                    "id": attachment.id,
                    "filename": attachment.name
                });
            }
        }
    )
    const payload = {
        "body": Utils.removeUserMarkup(message, Utils.getTaggedUsers(message, users)),
        "replies_to": repliesTo,
        "tagged_users": Utils.getTaggedUsers(message, users),
        "app_id": appId,
        "room_id": roomId,
        "created_by": {
            "id": "user-1234",
            "name": "Aman Gupta"
        },
        "updated_by": {
            "id": "user-1234",
            "name": "Aman Gupta"
        },
        "attachments": attachmentPayload,
        reference
    }
    return payload;
}

export const makeGetMessagesPayload = (body) => {
    const payload = {
        "app_id": body.appId,
        "room_id": body.roomId,
        "page_size": 20,
        "page_num": body.pageNum,
        "search_text": body.searchText,
        "include_reply": true
    }
    if (body.highlightMessage && body.highlightMessage.commentId) {
        payload.focused_msg_id = body.highlightMessage.commentId
    }
    if (body.repliesTo !== '') {
        payload.msg_id = [body.repliesTo]
    }
    return payload;
}

export const makePostFilePayload = (body, app) => {
    const fileNameSplit = body.name.split('.');
    const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
    const fileName = [...fileNameSplit.slice(0, fileNameSplit.length - 1), '.', fileExtension].join('');

    const payload = {
        "application": {
          "code": app.code,
          "name": app.name
        },
        "name": fileName,
        "user": {
            "id": "user-1234",
            "name": "Aman"
        },
        "dataUri": body.dataUri,
        "meta": [
            {}
        ]
    }
    return payload;
}

export const getBase64 = (file, cb, onError) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('error during dataUri generation:', error)
        onError(error);
    }
}