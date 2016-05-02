registerPlugin({
    name: 'AloneUserMode',
    version: '1.0',
    description: 'This script will turn the Bot volume up if only 1 user is there and if some one come the Bot change volume down.',
    author: 'REJack <info@rejack.de>',
    vars: {
        singleVolume: {
            title: 'Volume if is only 1 user in the Bots Room',
            type: 'number',
            placeholder: '25'
        },
        multiVolume: {
            title: 'Volume if is more than 1 user in the Bots Room',
            type: 'number',
            placeholder: '3'
        },
    }
}, function(sinusbot, config) {
    sinusbot.on('clientCount', function(ev) {
        if (ev.count == 2) {
            sinusbot.log('AloneUserMode change volume to'+config.singleVolume);
            sinusbot.setVolume(config.singleVolume);
        }else if (ev.count >= 3) {
            sinusbot.log('AloneUserMode change volume to'+config.multiVolume);
            sinusbot.setVolume(config.multiVolume);
        }
		return;
    });
});
