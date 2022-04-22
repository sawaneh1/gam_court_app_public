// import React, { createContext, useContext, useState } from "react";
// import { View, Text } from "react-native";

// export const UserProvider = ({ children }) => {
//   const [userValues, setUserValues] = useState({
//     accestoken: "",
//     userName: "test",
//     userPhone: "",
//     userRole: "",
//     userId: "",
//   });
//   return (
//     <View style={{ flex: 1 }}>
//       <UserContext.Provider value={[userValues, setUserValues]}>
//         {children}
//       </UserContext.Provider>
//     </View>
//   );
// };
// export default function useUser() {
//   return useContext(UserContext);
// }

import React, { createContext } from "react";

const UserContext = createContext({});

export default UserContext;
