export const default_delay = 3000;

export const max_display_notifications = 3;

export const icon_types = {
    danger: 'IcAlertDanger',
    info: 'IcAlertInfo',
    success: 'IcAlertSuccess',
    warning: 'IcAlertWarning',
    contract_sold: 'IcAlertInfo',
    announce: 'IcAnnounce',
};

export const types = {
    announce: 'notification--announce',
    danger: 'notification--danger',
    info: 'notification--info',
    success: 'notification--success',
    warning: 'notification--warning',
    contract_sold: 'notification--info',
};

export const sortNotifications = (() => {
    const notification_order = {
        dp2p: 1,
        contract_sold: 2,
        danger: 3,
        warning: 4,
        info: 5,
        success: 6,
    };

    return (a, b) => notification_order[a.type] - notification_order[b.type];
})();
