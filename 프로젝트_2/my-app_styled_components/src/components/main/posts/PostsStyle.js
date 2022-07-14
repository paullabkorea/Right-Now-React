import styled, { css } from 'styled-components'
import { Link } from "react-router-dom"

export const PostLink = styled(Link)`
	display: block;
	overflow: hidden;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 2rem;
`

export const PostImg = styled.img`
    width: 100%;
`

export const ContentsWrap = styled.div`
    padding: 1.6rem 2.4rem 2.4rem;
`

export const ShareContentsWrap = css`
    display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
`
export const PostH3 = styled.h3`
    ${ShareContentsWrap}
    height: calc(1.8rem * 1.4 * 2);
	margin: 1rem 0;
	font-size: 1.8rem;
	font-weight: bold;
	-webkit-line-clamp: 2;
	letter-spacing: -0.02em;
`

export const PostDescription = styled.p`
    ${ShareContentsWrap}
    height: calc(1.4rem * 1.4 * 3);
	margin-top: 1.6rem;
	color: var(--gray-color);
	font-size: 1.4rem;
	-webkit-line-clamp: 3;
	text-indent: 0.5em;
`