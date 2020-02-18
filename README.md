# codabl

Codabl - JavaScript client for codabl
The Codabl API is a collection of analytics tools and data integrations made for blockchain developers. In particular we offer Natural Language Processing and Anomaly detection algorithms that have been fine tune to understand text data and time series in the domain speficic setting of cryptocurrency and blockchain technology. This technology is intended to be use as building blocks to bigger applications, we offer examples on how to use them for Trading Backtesting and Smart Contract anomaly monitoring.

- API version: 0.1.0
- Package version: 0.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install codabl --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your codabl from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('codabl')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/codabl
then install it via:

```shell
    npm install codabl/codabl-node   --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Codabl = require('codabl');

var defaultClient = Codabl.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix['x-api-key'] = "Token"

var api = new Codabl.AnomalyApi()

var opts = { 
  'request': new Codabl.TimeSeries() // {TimeSeries} Time Series to be analyzed, with the following format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.anomalyBatch(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.bitlongs.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Codabl.AnomalyApi* | [**anomalyBatch**](docs/AnomalyApi.md#anomalyBatch) | **POST** /anomaly/json/detect | Detects anomalies in historical data in batches. This endpoint uses your entire dataset as input
*Codabl.IntegrationsApi* | [**cryptoGetCandleData**](docs/IntegrationsApi.md#cryptoGetCandleData) | **POST** /crypto/get_candles | Downloads candle format market data
*Codabl.IntegrationsApi* | [**cryptoGetExchangeAssets**](docs/IntegrationsApi.md#cryptoGetExchangeAssets) | **POST** /crypto/get_exchange_assets | Gets all coin pairs traded in specified exchange
*Codabl.IntegrationsApi* | [**cryptoGetOrderbooks**](docs/IntegrationsApi.md#cryptoGetOrderbooks) | **POST** /crypto/get_orderbooks | Returns the current state of the orderbook.
*Codabl.IntegrationsApi* | [**cryptoGetSupportedExchanges**](docs/IntegrationsApi.md#cryptoGetSupportedExchanges) | **GET** /crypto/get_supported_exchanges | Gets all cryptocurrency exchanges supported by the Codabl API
*Codabl.IntegrationsApi* | [**cryptoGetTicker**](docs/IntegrationsApi.md#cryptoGetTicker) | **POST** /crypto/get_ticker | Downloads candle format market data
*Codabl.LanguageApi* | [**languageGetCryptoEntities**](docs/LanguageApi.md#languageGetCryptoEntities) | **POST** /entity/get_crypto_entities | Extracts known crypto entities like coin names, exchanges, media from text.
*Codabl.LanguageApi* | [**languageGetGeneralSentiment**](docs/LanguageApi.md#languageGetGeneralSentiment) | **POST** /sentiment/get_general_sentiment | Returns a -1 to 1 score, depending on positive/negative sentiment
*Codabl.LanguageApi* | [**languageGetPriceSentiment**](docs/LanguageApi.md#languageGetPriceSentiment) | **POST** /language/get_price_sentiment | Sentiment analysis score using a model trained for buy signals.


## Documentation for Models

 - [Codabl.CandleRequest](docs/CandleRequest.md)
 - [Codabl.CandleResponse](docs/CandleResponse.md)
 - [Codabl.Error](docs/Error.md)
 - [Codabl.Exchange](docs/Exchange.md)
 - [Codabl.ExchangeAssetsResponse](docs/ExchangeAssetsResponse.md)
 - [Codabl.ExchangeAssetsResponseInner](docs/ExchangeAssetsResponseInner.md)
 - [Codabl.OHCLV](docs/OHCLV.md)
 - [Codabl.OrderbookRequest](docs/OrderbookRequest.md)
 - [Codabl.OrderbookResponse](docs/OrderbookResponse.md)
 - [Codabl.PointTimeSeries](docs/PointTimeSeries.md)
 - [Codabl.SupportedExchanges](docs/SupportedExchanges.md)
 - [Codabl.Text](docs/Text.md)
 - [Codabl.TickerResponse](docs/TickerResponse.md)
 - [Codabl.TickerResponseInner](docs/TickerResponseInner.md)
 - [Codabl.TimeSeries](docs/TimeSeries.md)


## Documentation for Authorization


### APIKeyHeader

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

