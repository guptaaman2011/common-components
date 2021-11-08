import React from 'react';
import XlsxIcon from '../assets/images/icons/type-files/xlsx.svg';

import JpgAIcon from '../assets/images/icons/type-files/jpg.svg';
import PdfAIcon from '../assets/images/icons/type-files/pdf.svg';
import PngAIcon from '../assets/images/icons/type-files/png.svg';
import PptAIcon from '../assets/images/icons/type-files/ppt.svg';
import XlsAIcon from '../assets/images/icons/type-files/xls.svg';
import DocAIcon from '../assets/images/icons/type-files/doc.svg';
import DocxAIcon from '../assets/images/icons/type-files/docx.svg';
import OthersIcon from '../assets/images/icons/type-files/others.svg';
import HtmlIcon from '../assets/images/icons/type-files/html.svg';
import TxtIcon from '../assets/images/icons/type-files/txt.svg';
import AiIcon from '../assets/images/icons/type-files/ai.svg';
import MP4Icon from '../assets/images/icons/type-files/mp4.svg';

const AttachmentFileIcons = {
  png: PngAIcon,
  jpg: JpgAIcon,
  jpeg: JpgAIcon,
  pdf: PdfAIcon,
  ppt: PptAIcon,
  pptx: PptAIcon,
  xls: XlsAIcon,
  docx: DocxAIcon,
  xlsx: XlsxIcon,
  doc: DocAIcon,
  ppt: PptAIcon,
  html: HtmlIcon,
  htm: HtmlIcon,
  txt: TxtIcon,
  ai: AiIcon,
  ods: OthersIcon,
  odt: OthersIcon,
  mp4: MP4Icon
};
export const getAttachmentFileIcon = value => AttachmentFileIcons[value] || OthersIcon;
