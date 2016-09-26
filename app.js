var app = angular.module('pdfDemo', []);
var controller = app.controller('pdfCtrl', pdfController);
function pdfController($scope) {

    var externalDataRetrievedFromServer = [
        {name: 'Bartek', age: 34},
        {name: 'John', age: 27},
        {name: 'Elizabeth', age: 30},
    ];

    function buildTableBody(data, columns) {
        var body = [];

        body.push(columns);

        data.forEach(function (row) {
            var dataRow = [];

            columns.forEach(function (column) {
                dataRow.push(row[column].toString());
            })

            body.push(dataRow);
        });

        return body;
    }

    function table(data, columns) {
        return {
            table: {
                headerRows: 1,
                body: buildTableBody(data, columns)
            }
        };
    }
    ;



    // prepare the document definition using declarative approach
    var docDefinition = {
        header: {
            margin: 10,
            columns: [
                {
                    image: 'data:image/jpeg;base64,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',
                    width: 30
                },
                {
                    margin: [10, 0, 0, 0],
                    text: 'Here goes the rest'
                }
            ]
        },
        content:
                [
                    {
                        style: 'tableExample',
                        table: {
                            headerRows: 1,
                            // keepWithHeaderRows: 1,
                            // dontBreakRows: true,
                            body: [
                                [{text: 'Code', style: 'header'},
                                    {text: 'Account Head', style: 'header'},
                                    {text: 'Description', style: 'header'},
                                    {text: 'Dr Amount', style: 'header'},
                                    {text: 'Cr Amount', style: 'header'}

                                ],
                                [
                                    '1', 'fdd', 'fff', '1200', '0'
                                ],
                                [
                                    '2', 'fdd', 'fff', '1200', '0'
                                ],
                                [
                                    '3', 'fdd', 'fff', '0', '2400'
                                ]
                            ]
                        }
                    },
                    {
                        text: '\n\nIn Words: Rs. Two Thousand and Four Hundred only \n\n',
                        style: 'subheader'
                    },
                    {
                        text: 'Narration: Voucher submitted \n\n',
                        style: 'subheader'
                    },
                    {text: 'Dynamic parts', style: 'header'},
                    table(externalDataRetrievedFromServer, ['name', 'age'])
                ],
        styles: {
            header: {
                fontSize: 14,
                bold: true,
                alignment: 'justify'
            },
            subheader: {
                fontSize: 12,
                bold: true
            }
        }
    };
    $scope.openPdf = function () {
        pdfMake.createPdf(docDefinition).open();
    };
    $scope.downloadPdf = function () {
        pdfMake.createPdf(docDefinition).download();
    };
}
