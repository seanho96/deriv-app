import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, NewsTicker } from '@deriv/components';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';

const OnRampProviderCard = ({ is_dark_mode_on, provider, setSelectedProvider }) => {
    const payment_icons = provider.getPaymentIcons();
    const gtm_identifier = provider.name.toLowerCase().replace(' ', '-');

    return (
        <div className='on-ramp__provider'>
            <div className='on-ramp__provider-logo'>
                <Icon icon={is_dark_mode_on ? provider.icon.dark : provider.icon.light} width={128} height={128} />
            </div>
            <h2 className='on-ramp__provider-name'>{provider.name}</h2>
            <div className='on-ramp__provider-description'>{provider.getDescription()}</div>
            <div className='on-ramp__provider-payment-icons'>
                <div className='on-ramp__provider-payment-icons-shadow' />
                <NewsTicker speed={10}>
                    {payment_icons.map((payment_icon, idx) => (
                        <Icon key={idx} size={40} icon={is_dark_mode_on ? payment_icon.dark : payment_icon.light} />
                    ))}
                </NewsTicker>
            </div>
            <Button
                id={`gtm-onramp-provider-select--${gtm_identifier}`}
                className='on-ramp__provider-button'
                type='button'
                has_effect
                onClick={() => setSelectedProvider(provider)}
                text={localize('Select')}
                primary
            />
        </div>
    );
};

OnRampProviderCard.propTypes = {
    is_dark_mode_on: PropTypes.bool,
    provider: PropTypes.object, // External prop passed by parent.
    setSelectedProvider: PropTypes.func,
};

export default connect(({ modules, ui }) => ({
    setSelectedProvider: modules.cashier.onramp.setSelectedProvider,
    is_dark_mode_on: ui.is_dark_mode_on,
}))(OnRampProviderCard);
