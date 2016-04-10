
angular.module('openbciVisualizer')
    .component('bciDelta', {
        templateUrl: 'components/delta/delta.html',
        controller: function ($timeout) {
            var $ctrl = this;
            var socket = io();
            $ctrl.series = ['Channel 1','Channel 2','Channel 3','Channel 4','Channel 5','Channel 6','Channel 7','Channel 8'];
            socket.on('openBCIFrequency', function (data) {
                var deltaRange = EEGSpectrumUtils.filterBand(data.spectrums, data.labels, [0.5, 4]);
                $timeout(function () {
                    $ctrl.labels = deltaRange.labels;
                    $ctrl.data = deltaRange.spectrums;
                });
            });
        }
    });
