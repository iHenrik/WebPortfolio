
portfolioApp.controller('PortfolioController', function ($scope) {

    var isAnalyzerCaptionOpen = false;
    var isSttCaptionOpen = false;

    $scope.animateAnalyzerCaption = function () {

        if (!isAnalyzerCaptionOpen) {

            $("#analyzerGlyph").css("display", "none");
            $("#analyzerGlyph").css("opacity", "0");

            $("#analyzerCaptionBlock").animate({ width: '800px' }, 200);
            $("#analyzerCaptionBlock").animate({ height: '200px' },
                {duration:800,
                easing:'easeOutCubic',
                    complete: function () {
                        $("#analyzerCaptionText").animate({ opacity: '1' });
                        $("#analyzerCaptionText").css("display", "block");
                    }
                });

            isAnalyzerCaptionOpen = true;
        }
        else {
            $("#analyzerCaptionText").css("display", "none");
            $("#analyzerCaptionText").css("opacity", "0");

            $("#analyzerCaptionBlock").animate({ height: '60px' }, 200);
            $("#analyzerCaptionBlock").animate({ width: '60px' },
                {duration:200,
                    complete: function () {
                        $("#analyzerGlyph").animate({ opacity: '1' });
                        $("#analyzerGlyph").css("display", "block");
                    }
                }
                );

            isAnalyzerCaptionOpen = false;
        }
    };

    $scope.animateSttCaption = function () {

        if (!isSttCaptionOpen) {

            $("#sttGlyph").css("display", "none");
            $("#sttGlyph").css("opacity", "0");

            $("#sttCaptionBlock").animate({ height: '200px' }, 100);
            $("#sttCaptionBlock").animate({ width: '800px' },
                {duration:800,
                easing:'easeOutCubic',
                    complete: function () {
                        $("#sttCaptionText").animate({ opacity: '1' });
                        $("#sttCaptionText").css("display", "block");
                    }
                });

            isSttCaptionOpen = true;
        }
        else {
            $("#sttCaptionText").css("display", "none");
            $("#sttCaptionText").css("opacity", "0");

            $("#sttCaptionBlock").animate({ width: '60px' }, 200);
            $("#sttCaptionBlock").animate({ height: '60px' },
                {
                    complete: function () {
                        $("#sttGlyph").animate({ opacity: '1' });
                        $("#sttGlyph").css("display", "block");
                    }
                }
                );

            isSttCaptionOpen = false;
        }
    };

}
    );
    