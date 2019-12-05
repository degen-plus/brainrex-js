# Brainrex.IntegrationsApi

All URIs are relative to *https://api.bitlongs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cryptoGetCandleData**](IntegrationsApi.md#cryptoGetCandleData) | **POST** /crypto/get_candles | Downloads candle format market data
[**cryptoGetExchangeAssets**](IntegrationsApi.md#cryptoGetExchangeAssets) | **POST** /crypto/get_exchange_assets | Gets all currency pairs traded in selected exchange
[**cryptoGetOrderbooks**](IntegrationsApi.md#cryptoGetOrderbooks) | **POST** /crypto/get_orderbooks | Downloads candle format market data
[**cryptoGetSupportedExchanges**](IntegrationsApi.md#cryptoGetSupportedExchanges) | **GET** /crypto/get_supported_exchanges | Gets all cryptocurrency exchanges supported by the Brainrex API
[**cryptoGetTicker**](IntegrationsApi.md#cryptoGetTicker) | **POST** /crypto/get_ticker | Downloads candle format market data


<a name="cryptoGetCandleData"></a>
# **cryptoGetCandleData**
> CandleResponse cryptoGetCandleData(candleRequest)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.IntegrationsApi();

var candleRequest = new Brainrex.CandleRequest(); // CandleRequest | The Get candles end point return market data in Open High Close Volume format. In order to use this endpoint you need to enter your API keys to your data provider in the console


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoGetCandleData(candleRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **candleRequest** | [**CandleRequest**](CandleRequest.md)| The Get candles end point return market data in Open High Close Volume format. In order to use this endpoint you need to enter your API keys to your data provider in the console | 

### Return type

[**CandleResponse**](CandleResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cryptoGetExchangeAssets"></a>
# **cryptoGetExchangeAssets**
> ExchangeAssetsResponse cryptoGetExchangeAssets(exchange)

Gets all currency pairs traded in selected exchange

Returns a list of candle data from specified market and data range

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.IntegrationsApi();

var exchange = new Brainrex.Exchange(); // Exchange | Name of the cryptocurrency exchange


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoGetExchangeAssets(exchange, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | [**Exchange**](Exchange.md)| Name of the cryptocurrency exchange | 

### Return type

[**ExchangeAssetsResponse**](ExchangeAssetsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cryptoGetOrderbooks"></a>
# **cryptoGetOrderbooks**
> OrderbookResponse cryptoGetOrderbooks(orderbookRequest)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.IntegrationsApi();

var orderbookRequest = new Brainrex.OrderbookRequest(); // OrderbookRequest | Exchange, trading pair and date rage for data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoGetOrderbooks(orderbookRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderbookRequest** | [**OrderbookRequest**](OrderbookRequest.md)| Exchange, trading pair and date rage for data | 

### Return type

[**OrderbookResponse**](OrderbookResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cryptoGetSupportedExchanges"></a>
# **cryptoGetSupportedExchanges**
> SupportedExchanges cryptoGetSupportedExchanges()

Gets all cryptocurrency exchanges supported by the Brainrex API

Returns a list of candle data from specified market and data range

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.IntegrationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoGetSupportedExchanges(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SupportedExchanges**](SupportedExchanges.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cryptoGetTicker"></a>
# **cryptoGetTicker**
> TickerResponse cryptoGetTicker(exchange)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.IntegrationsApi();

var exchange = new Brainrex.Exchange(); // Exchange | Get ticker data from specified crypto exchange


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoGetTicker(exchange, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | [**Exchange**](Exchange.md)| Get ticker data from specified crypto exchange | 

### Return type

[**TickerResponse**](TickerResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

