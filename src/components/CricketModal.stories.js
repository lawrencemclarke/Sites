import React from 'react';

import CricketModal from './CricketModal';

export default {
    component: CricketModal,
    title: 'Modal',
};

const Template = args => <CricketModal {...args} />;

export const Default = Template.bind({});
Default.args = {
        anotherObject:{},
        title: 'Innovation Day',
        closeBtnText:'close',
        content:`*Free Smartphones: Limited time. Eligible Devices: Samsung A01, LG Fortune 3, or Nokia C2 Tava. Must port-in & activ. new line on min. $55/mo. voice-and-data plan. First mo. svc charge & tax due at sale. Excludes upgrades and AT&T ports. Activation fee (up to $25/line in-store) & add’l one-time fees ($4 Customer Assistance Fee) may apply. See cricketwireless.com/fees. Price w/use of Mfg/Dist coupon automatically applied at checkout. By accepting Mfg/Dist coupon, customer agrees to pay all transactional tax due on item sold, including value of coupon where applicable. Transfer Number (Switch/Port), Upgrade or New Line pricing is available to customer once every 180 days. May not be combinable with certain offers, discounts, or credits. Cricket Core Data Restrictions: For content we can identify as video, streaming speed limited to max of 1.5 Mbps (Standard Definition quality, about 480p). For all data usage, Cricket may temporarily slow data speeds if the network is busy. Details on network management policies at cricketwireless.com/mobilebroadband. Data usage and tethering that violates contract terms may be slowed or terminated. Phone may be restricted to Cricket svc during first 6 months after activation. By activating/using svc, you agree to Cricket Terms of Service (cricketwireless.com/terms). Svc good for 30 days and is subject to Cricket network management policies, see cricketwireless.com/mobile broadband for details. Return Fee: $25; see cricketwireless.com/fees for details. Pricing, terms, & other restr's subject to change and may be modified or terminated at any time without notice.  Coverage & svc not avail. everywhere.  © 2021 Cricket Wireless LLC. All rights reserved.`
};
