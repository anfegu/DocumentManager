import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FileViewer from 'react-native-file-viewer';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createMaterialTopTabNavigator();

const FilesTab = ({ documents }) => {
  const renderImageItem = ({ item }) => {
    const handleOpenDocument = async () => {
      await FileViewer.open(item.link);
    };

    const isImage = item.type === 'image/jpeg';
    const isPdf = item.type === 'application/pdf';

    const imageComponent = isImage ? (
      <Image source={{ uri: item.link }} style={styles.image} />
    ) : isPdf ? (
      <Image source={require('../assets/icons/pdf.png')} style={styles.image} />
    ) : (
      <Image source={require('../assets/icons/random-icon.png')} style={styles.image} />
    );

    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleOpenDocument}>
          {imageComponent}
          <Text style={styles.imageText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={documents}
      renderItem={renderImageItem}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      numColumns={2}
      style={styles.imageList}
    />
  );
};

const LinksTab = ({ links }) => {
  const renderLinkItem = ({ item }) => {
    // Implement your link item rendering logic here
  };

  return (
    <FlatList
      data={links}
      renderItem={renderLinkItem}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      style={styles.linkList}
    />
  );
};

const HomeScreen = () => {
  const [documents, setDocuments] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedDocuments = await AsyncStorage.getItem('documents');
      const storedLinks = await AsyncStorage.getItem('links');

      if (storedDocuments) {
        setDocuments(JSON.parse(storedDocuments));
      }

      if (storedLinks) {
        setLinks(JSON.parse(storedLinks));
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

  React.useEffect(() => {
    saveData();
  }, [documents, links]);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('documents', JSON.stringify(documents));
      await AsyncStorage.setItem('links', JSON.stringify(links));
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button title="Add File" onPress={() => navigation.navigate('AddDocument')} />
          <Button title="Add Link" onPress={() => navigation.navigate('AddLink')} />
        </View>

        <Tab.Navigator
          tabBarOptions={{
            style: styles.tabBarStyle,
            indicatorStyle: styles.tabIndicator,
            labelStyle: styles.tabLabel,
            tabStyle: styles.tabStyle,
          }}
        >
          <Tab.Screen name="Files" options={{ title: 'Files' }}>
            {() => <FilesTab documents={documents} />}
          </Tab.Screen>
          <Tab.Screen name="Links" options={{ title: 'Links' }}>
            {() => <LinksTab links={links} />}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
