$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Uzantoj: 2666,
            Landoj: null,
            Grupoj: 2647
        }, {
            period: '2010 Q2',
            Uzantoj: 2778,
            Landoj: 2294,
            Grupoj: 2441
        }, {
            period: '2010 Q3',
            Uzantoj: 4912,
            Landoj: 1969,
            Grupoj: 2501
        }, {
            period: '2010 Q4',
            Uzantoj: 3767,
            Landoj: 3597,
            Grupoj: 5689
        }, {
            period: '2011 Q1',
            Uzantoj: 6810,
            Landoj: 1914,
            Grupoj: 2293
        }, {
            period: '2011 Q2',
            Uzantoj: 5670,
            Landoj: 4293,
            Grupoj: 1881
        }, {
            period: '2011 Q3',
            Uzantoj: 4820,
            Landoj: 3795,
            Grupoj: 1588
        }, {
            period: '2011 Q4',
            Uzantoj: 15073,
            Landoj: 5967,
            Grupoj: 5175
        }, {
            period: '2012 Q1',
            Uzantoj: 10687,
            Landoj: 4460,
            Grupoj: 2028
        }, {
            period: '2012 Q2',
            Uzantoj: 8432,
            Landoj: 5713,
            Grupoj: 1791
        }],
        xkey: 'period',
        ykeys: ['Uzantoj', 'Landoj', 'Grupoj'],
        labels: ['Uzantoj', 'Landoj', 'Grupoj'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
