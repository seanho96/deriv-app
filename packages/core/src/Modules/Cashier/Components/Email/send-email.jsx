import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Text } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import EmailSent from './email-sent.jsx';

class SendEmail extends React.Component {
    render() {
        return (
            <div className='cashier__wrapper'>
                {this.props.is_email_sent ? (
                    <EmailSent
                        is_email_sent={this.props.is_email_sent}
                        is_resend_clicked={this.props.is_resend_clicked}
                        resend_timeout={this.props.resend_timeout}
                    />
                ) : (
                    <React.Fragment>
                        <Icon icon='IcCashierAuthenticate' className='withdraw__icon' size={128} />
                        <Text weight='bold' as='p' className='withdraw__header'>
                            <Localize i18n_default_text='We will send you an email to confirm your withdrawal request.' />
                        </Text>
                        <Text size='xs' as='p'>
                            <Localize i18n_default_text='This is to protect your account from unauthorised withdrawals.' />
                        </Text>
                        <Button
                            className='withdraw__verify-button'
                            has_effect
                            text={localize('Verify my request')}
                            onClick={this.props.sendVerificationEmail}
                            primary
                            large
                        />
                    </React.Fragment>
                )}
            </div>
        );
    }
}

SendEmail.propTypes = {
    is_email_sent: PropTypes.bool,
    is_resend_clicked: PropTypes.bool,
    resend_timeout: PropTypes.number,
    sendVerificationEmail: PropTypes.func,
};

export default connect(({ modules }) => ({
    is_email_sent: modules.cashier.config.withdraw.verification.is_email_sent,
    is_resend_clicked: modules.cashier.config.withdraw.verification.is_resend_clicked,
    resend_timeout: modules.cashier.config.withdraw.verification.resend_timeout,
    sendVerificationEmail: modules.cashier.sendVerificationEmail,
}))(SendEmail);
