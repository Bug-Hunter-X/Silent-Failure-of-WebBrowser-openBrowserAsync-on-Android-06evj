import * as WebBrowser from 'expo-web-browser';

const MyComponent = () => {
  const handlePress = async () => {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log('Result', result);
  };

  return (
    <Button title="Open Browser" onPress={handlePress} />
  );
};