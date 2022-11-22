import Register from '../pages/register'
import FogotPassword from '../pages/fogotMyPassword'
import Login from '../pages/login'
import ServiceHome from '../pages/home'
import Scheduler from '../pages/scheduler'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const Routes = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='FogotPassword' component={FogotPassword} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name="Home" component={ServiceHome} />
        <Stack.Screen name="Scheduler" component={Scheduler} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default Routes