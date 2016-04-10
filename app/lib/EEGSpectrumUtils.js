
var EEGSpectrumUtils = {

    /**
     * filterBand: Give spectrums and labels, it filters the spectrums based on the labels within the range
     * @param spectrums
     * @param labels
     * @param range
     * @returns {{spectrums: Array, labels: *}}
     */
    filterBand: function (spectrums, labels, range) {
        //if (!spectrums ) return console.log();
        spectrums = spectrums.map(function (channel) {
            return channel.filter(function (spectrum, index) {
                return labels[index] >= range[0] && labels[index] <= range[1];
            });
        });
        spectrums =  [spectrums.map(function (channel) {
            return channel.reduce(function (a, b) {
                    return a + b;
                }) / channel.length;
        })];
        return {
            spectrums: spectrums,
            labels: labels
        }
    }
};