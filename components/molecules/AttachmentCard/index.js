import React from 'react';
import { IconButton, Text } from "../../atoms"
import { getAttachmentFileIcon } from '../../../utils/FileIcons';
import PropTypes from 'prop-types';
import DeleteIcon from '../../../assets/images/icons/chatbox/delete_internal.svg';
import CancelIcon from '../../../assets/images/icons/chatbox/Cancel.svg';
import { Row, Col } from 'antd';
import { StyledAttachmentCard, StyledProgressBar, StyledText, StyledLink, IconButtonWrapper } from './styles';
import { LUP_MAIN_FONT_SIZE12, LUP_SPACING_18, LUP_FUNCTIONAL_ERROR_RED, LUP_BASE_BLUE_DARK } from '../../../theme';

const REACT_APP_FILE_SERVICE_URL = process.env.REACT_APP_FILE_SERVICE_URL;
const AttachmentCard = ({ isFocused, searchText, attachment, deleteAttachment, cancelAttachmentUpload, parent, appCode }) => {

    const fileNameSplit = attachment.name.split('.');
    const isHighlighted = searchText && attachment.name && attachment.name.toLowerCase().includes(searchText.toLowerCase()); 
    const isHighlightedAndFocused = isHighlighted && isFocused;
    const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
    const fileIcon = getAttachmentFileIcon(fileExtension);
    const isUploading = attachment.progress !== 100 && !attachment.id;
    const isError = attachment.error;
    const src= `${REACT_APP_FILE_SERVICE_URL}/${appCode}/file/${attachment.id}`;
    
    return (
        <StyledAttachmentCard isHighlighted={isHighlighted} isHighlightedAndFocused={isHighlightedAndFocused} 
            isUploading={isUploading} isError={attachment.error}>
            <Row>
                <Col span={4} >
                    <IconButton src={fileIcon} size='20px'/>
                </Col>

                {parent === "chatItems" ?
                <Col span={20}>
                    <StyledLink href={src} isHighlighted={isHighlighted} target="_blank">
                        {attachment.name}
                    </StyledLink>
                </Col> :
                <Col span={isUploading && !isError ? 12 : 16} >
                    <StyledText isHighlighted={isHighlighted} isUploading={isUploading}>
                        {attachment.name}
                    </StyledText>
                </Col>}
                {parent !== "chatItems" &&
                <>
                    {isUploading && !isError && 
                    <Col span={4}>
                        <Text color={LUP_BASE_BLUE_DARK} fontSize="10px">{attachment.progress}%</Text>
                    </Col>
                    }
                    <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <IconButtonWrapper>
                            <IconButton 
                                src={isUploading && !isError ? CancelIcon : DeleteIcon}
                                onClick={() => isUploading && !isError ? 
                                    cancelAttachmentUpload(attachment) : 
                                    deleteAttachment(attachment)
                                } 
                            />
                        </IconButtonWrapper>
                    </Col>
                </>
                }
            </Row>
            
            {parent !== "chatItems" && !isError &&
            <StyledProgressBar 
                percent={attachment.progress} 
                size="small"
                strokeWidth={isUploading ? 1 : 0.5}
                type="line"
                strokeLinecap="square"
                showInfo={false}
                strokeColor={LUP_BASE_BLUE_DARK}
            />}
            {isError && <Text color={LUP_FUNCTIONAL_ERROR_RED} fontSize={LUP_MAIN_FONT_SIZE12} lineHeight={LUP_SPACING_18}>Failed to upload.Try again.</Text>}
        </StyledAttachmentCard>
    );
}

AttachmentCard.propTypes = {
    attachment: PropTypes.object,
    deleteAttachment: PropTypes.func,
    cancelAttachmentUpload: PropTypes.func,
    parent: PropTypes.string,
    appCode: PropTypes.string,
    searchText: PropTypes.string,
    isFocused: PropTypes.bool,
}

AttachmentCard.defaultProps = {
    attachment: {},
    deleteAttachment: () => {},
    cancelAttachmentUpload: () => {},
    parent: "",
    appCode: "",
    searchText: "",
    isFocused: false,
}
export default AttachmentCard;