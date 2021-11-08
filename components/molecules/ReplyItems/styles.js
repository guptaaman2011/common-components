import styled from 'styled-components';
import { Timeline } from 'antd';
import { Block } from "../../atoms";

const StyledTimeline = styled(Timeline)`
    &.ant-timeline {
        width: 100%;
        padding-top: 32px;
    }

    &.ant-timeline
    > .ant-timeline-item
    > .ant-timeline-item-content {
        top: -10px;
        padding-left: 6px;
    }

    &.ant-timeline
    > .ant-timeline-item
    > .ant-timeline-item-head-custom {
        margin-left: 3px;
    }

    &.ant-timeline
    > .ant-timeline-item
    > .ant-timeline-item-tail {
        left: 7px;
    }

    &.ant-timeline
    > .ant-timeline-item:last-child {
        padding: 0px;
    }
    
    padding-left: 8px;
    padding-top: 10px;
    padding-right: 6px;
`;

const StyledBlock = styled(Block)`
    padding: 2px 0 0px;
`;

export {
    StyledTimeline,
    StyledBlock
};