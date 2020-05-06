import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import { commonStyles, FormatStyles} from '../../style'
import Box from '@material-ui/core/Box';
import GridCenter from '../../Components/Grid/GridCenter'

import MenuItem from '@material-ui/core/MenuItem';

import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';

import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';

import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

import FormatAlignLeftOutlinedIcon from '@material-ui/icons/FormatAlignLeftOutlined';
import FormatAlignCenterOutlinedIcon from '@material-ui/icons/FormatAlignCenterOutlined';
import FormatAlignRightOutlinedIcon from '@material-ui/icons/FormatAlignRightOutlined';

import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

import ShareIcon from '@material-ui/icons/Share';


function FormatBar () {
    const CommonClases =  commonStyles()
    const FormatBarClases = FormatStyles()
  return (
    <>
    <Box className={CommonClases.mainBackColor + " " + FormatBarClases.fixBar}>
    <GridCenter>
    <Box
     display="flex"
     alignItems="center"
    >
      <SelectItem />
      <ColorItem />
      <FormatListNumberedOutlined />
      <FormatListBulletedOutlined />
      <CheckBoxOutlined />
      <FormatAlign />
      <AttachFileOutlined />
      <CameraAltOutlined />
      <Share />
    </Box>
    </GridCenter>
    </Box>
    </>
  )
}

function SelectItem () {
    return (
        <>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value="13"
          label="Age"
        >
          <MenuItem value={10}>10px</MenuItem>
          <MenuItem value={11}>11px</MenuItem>
          <MenuItem value={12}>12px</MenuItem>
          <MenuItem value={13}>13px</MenuItem>
          <MenuItem value={14}>14px</MenuItem>
          <MenuItem value={15}>15px</MenuItem>
          <MenuItem value={16}>16px</MenuItem>
        </Select>
      </>
    )
}

function ColorItem () {
    return (
        <>
        <FormatColorFillIcon/>
        </>
    )
}

function FormatListNumberedOutlined () {
    return (
        <FormatListNumberedOutlinedIcon />
    )
}

function FormatListBulletedOutlined () {
    return (
        <FormatListBulletedOutlinedIcon />
    )
}

function CheckBoxOutlined () {
    return (
        <CheckBoxOutlinedIcon />
    )
}

function FormatAlign () {
    return (
        <>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value=""
          label="Age"
        >
          <MenuItem value=""><FormatAlignLeftOutlinedIcon /></MenuItem>
          <MenuItem value={10}><FormatAlignCenterOutlinedIcon/></MenuItem>
          <MenuItem value={10}><FormatAlignRightOutlinedIcon /></MenuItem>
        </Select>
        </>
    )
}

function AttachFileOutlined () {
    return (
        <AttachFileOutlinedIcon />
    )
}

function CameraAltOutlined () {
    return (
        <CameraAltOutlinedIcon />
    )
}

function Share () {
    return (
        <ShareIcon />
    ) 
}
export default FormatBar;