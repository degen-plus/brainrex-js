# Brainrex.LanguageApi

All URIs are relative to *https://api.bitlongs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languageGetCryptoEntities**](LanguageApi.md#languageGetCryptoEntities) | **POST** /entity/get_crypto_entities | Named Entity Recognition software capable of understanding cryptocurrency and blockchain speficic language.
[**languageGetGeneralSentiment**](LanguageApi.md#languageGetGeneralSentiment) | **POST** /sentiment/get_general_sentiment | This endpoints returns a score from -1 to +1 where depending on negative or positive attitude in the text.
[**languageGetPriceSentiment**](LanguageApi.md#languageGetPriceSentiment) | **POST** /language/get_price_sentiment | Sentiment analysis score using a model trained for buy signals.


<a name="languageGetCryptoEntities"></a>
# **languageGetCryptoEntities**
> languageGetCryptoEntities(text)

Named Entity Recognition software capable of understanding cryptocurrency and blockchain speficic language.

This endpoint ingest text and output known entities 

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.LanguageApi();

var text = new Brainrex.Text(); // Text | String of text to be analyze for investor sentiment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.languageGetCryptoEntities(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyze for investor sentiment. | 

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="languageGetGeneralSentiment"></a>
# **languageGetGeneralSentiment**
> 'String' languageGetGeneralSentiment(text)

This endpoints returns a score from -1 to +1 where depending on negative or positive attitude in the text.

Returns a -1 to 1 score, depending on positive/negative sentiment

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.LanguageApi();

var text = new Brainrex.Text(); // Text | String of text to be analyze for general sentiment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageGetGeneralSentiment(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyze for general sentiment. | 

### Return type

**'String'**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="languageGetPriceSentiment"></a>
# **languageGetPriceSentiment**
> 'String' languageGetPriceSentiment(text)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.LanguageApi();

var text = new Brainrex.Text(); // Text | String of text to be analyze for investor sentiment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.languageGetPriceSentiment(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyze for investor sentiment. | 

### Return type

**'String'**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

