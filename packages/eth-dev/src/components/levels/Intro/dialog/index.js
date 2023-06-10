import StartMonolog from './dialogParts/StartMonolog'
import FirstContact from './dialogParts/FirstContact'
import LearnAboutScSecurity from './dialogParts/CreateASchema'
import BuildDapps from './dialogParts/CreateAttestation'

import PolygoneID from '../../polygon-id/dialog/dialogParts/Start.jsx'
import Taiko from '../../Taiko/dialog/dialogParts/Start.jsx'
import GnosisGateway from '../../GnosisGateway/dialog/dialogParts/Start.jsx'

export default [
  ...StartMonolog,
  ...FirstContact,
  ...LearnAboutScSecurity,
  ...BuildDapps,
  ...PolygoneID,
  ...GnosisGateway,
  ...Taiko
]
