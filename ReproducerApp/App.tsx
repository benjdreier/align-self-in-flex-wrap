/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function ProblematicBehavior(): React.JSX.Element {
  return (
    <View style={problematicStyles.group}>
      <View style={problematicStyles.wrapper}>
        <View style={problematicStyles.alignEnd}>
          <Text>flex-end</Text>
        </View>
        <View style={problematicStyles.alignCenter}>
          <Text>center</Text>
        </View>
        <View style={problematicStyles.alignStart}>
          <Text>flex-start</Text>
        </View>
        <View>
          <Text>loooooooooooooooooooooooooooooooooong</Text>
        </View>
        <View style={problematicStyles.alignEnd}>
          <Text>flex-end</Text>
        </View>
      </View>
    </View>
  )
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <Header/>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>

          <ProblematicBehavior/>

          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

const problematicStyles = StyleSheet.create({
  group: {
    backgroundColor: "red",
    minWidth: 0,
    minHeight: 100,
    maxHeight: 150,
    width: "100%",
    height: "100%",
  },
  wrapper: {
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    alignItems: "stretch",
    justifyContent: "flex-start",
    rowGap: 10,
    columnGap: 20,
    backgroundColor: 'green'
  },
  alignEnd: {
    alignSelf: "flex-end",
    backgroundColor: "purple"
  },
  alignCenter: {
    alignSelf: "center",
    backgroundColor: "purple"
  },
  alignStart: {
    alignSelf: "flex-start",
    backgroundColor: "purple"
  }
})

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
