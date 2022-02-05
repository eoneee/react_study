import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjhfMTk4/MDAxNjQzMzAzMjA4NTM3.Es9ZhReqzhbEjF_BnqAuUbt2b3tff0YmvSlmzNjf3-4g.0pLxOGaIEj0aS7zp7qYJv27NrT5kM4xIpIH62gu2GwEg.JPEG.eon8276/output_2548943409.jpg?type=w800'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage