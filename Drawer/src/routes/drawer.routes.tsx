import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { Home } from '../screens/Home';
import { Fotos } from '../screens/Fotos';
import { Curiosidades } from '../screens/Curiosidades';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="home" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='Fotos'
                component={Fotos}
                options={{
                    drawerLabel: 'Fotos',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="image" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='Curiosidades'
                component={Curiosidades}
                options={{
                    drawerLabel: 'Curiosidades',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
        </Navigator>
    )
}