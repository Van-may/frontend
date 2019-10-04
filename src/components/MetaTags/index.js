import React from 'react'
import Helmet from 'react-helmet'
import withRouter from '../../utils/withRouter'
import truncate from '../../utils/truncate'
import {homepage} from '../../../package.json'

const joinURL = (...args) =>
	args
		.reverse()
		.join('/')
		.replace(/([^:])\/+/g, '$1/')

const MetaTags = ({
	title,
	description,
	image,
	authorName,
	siteTitle,
	location: {pathname},
}) => {
	const composedTitle = `${siteTitle} | ${title}`
	// const canonical = joinURL(pathname, homepage)
	const latlng = '20.425806, 106.355553'
	const locale = 'vi_VN'
	const truncatedDescription = truncate(description, 120)
	return (
		<Helmet>
			<title>{composedTitle}</title>
			<meta name="description" content={truncatedDescription} />
			<meta name="ICBM" content={latlng} />
			<meta name="geo.position" content={latlng} />
			<meta name="geo.region" content="VN-20" />
			<meta name="geo.placename" content="Thai Binh City" />

			<meta property="og:url" content={joinURL(pathname, homepage)} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={composedTitle} />
			{image && <meta property="og:image" content={image} />}
			<meta property="og:description" content={truncatedDescription} />
			<meta property="og:site_name" content={siteTitle} />
			<meta property="og:locale" content={locale} />
			{authorName && <meta property="article:author" content={authorName} />}

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@tiepdotme" />
			<meta name="twitter:url" content={joinURL(pathname, homepage)} />
			<meta name="twitter:title" content={composedTitle} />
			<meta name="twitter:description" content={truncatedDescription} />
			{image && <meta name="twitter:image" content={image} />}
		</Helmet>
	)
}

MetaTags.defaultProps = {
	title: 'Trang đầu',
	description: 'tất tần tật những điều quanh cuộc sống hàng ngày, nhà cửa, công việc, kế mưu sinh được gói gọn ở đây',
	image: '/assets/images/og-image.png',
	authorName: null,
	siteTitle: 'Vận may sơn trang',
}

export default withRouter(MetaTags)
