import React from 'react'
import PropTypes from 'prop-types'
import { AppBadge } from '@aragon/ui'
import iconSvgAddressBook from './icons/address-book.svg'
import iconSvgAgent from './icons/agent.svg'
import iconSvgAllocations from './icons/allocations.svg'
import iconSvgDotVoting from './icons/dot-voting.svg'
import iconSvgFinance from './icons/finance.svg'
import iconSvgFundraising from './icons/fundraising.svg'
import iconSvgPayroll from './icons/payroll.svg'
import iconSvgProjects from './icons/projects.svg'
import iconSvgRewards from './icons/rewards.svg'
import iconSvgTokens from './icons/token-manager.svg'
import iconSvgVault from './icons/vault.svg'
import iconSvgVoting from './icons/voting.svg'
import iconTimeLock from '../dandelion/config/icons/time-lock.svg'
import iconTokenRequest from '../dandelion/config/icons/token-request.svg'
import iconDissentVoting from '../dandelion/config/icons/dissent-voting.svg'
import iconDelay from '../dandelion/config/icons/delay.svg'
import iconRedemptions from '../dandelion/config/icons/redemptions.svg'

const KNOWN_ICONS = new Map([
  ['address-book.aragonpm.eth', iconSvgAddressBook],
  ['agent.aragonpm.eth', iconSvgAgent],
  ['allocations.aragonpm.eth', iconSvgAllocations],
  ['aragon-fundraising.aragonpm.eth', iconSvgFundraising],
  ['dot-voting.aragonpm.eth', iconSvgDotVoting],
  ['finance.aragonpm.eth', iconSvgFinance],
  ['payroll.aragonpm.eth', iconSvgPayroll],
  ['projects.aragonpm.eth', iconSvgProjects],
  ['rewards.aragonpm.eth', iconSvgRewards],
  ['token-manager.aragonpm.eth', iconSvgTokens],
  ['vault.aragonpm.eth', iconSvgVault],
  ['voting.aragonpm.eth', iconSvgVoting],
  ['token-request.aragonpm.eth', iconTokenRequest],
  ['time-lock.aragonpm.eth', iconTimeLock],
  ['dissent-voting.aragonpm.eth', iconDissentVoting],
  ['delay.aragonpm.eth', iconDelay],
  [('redemptions.aragonpm.eth', iconRedemptions)],
])

function KnownAppBadge({ appName, compact, label }) {
  return <AppBadge badgeOnly iconSrc={KNOWN_ICONS.get(appName)} label={label} />
}
KnownAppBadge.propTypes = {
  appName: PropTypes.string.isRequired,
  compact: PropTypes.bool,
  label: PropTypes.string.isRequired,
}

export default KnownAppBadge
