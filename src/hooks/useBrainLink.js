import * as React from "react";

export const useBrainLink = () => {
  const [isConnected, setIsConnected] = React.useState(false);

  const connect = async () => {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ name: "IMISW12(ID-1141)" }],
      //     acceptAllDevices: true,
      //   optionalServices: ["0000fee0-0000-1000-8000-00805f9b34fb"],
    });
    if (!device) {
      console.error("Failed to connect to device.");
      return;
    }
    const server = await device.gatt?.connect();

    if (!server) {
      console.error("Failed to connect to server");
      return;
    }
    console.log(device);
    const services = await server.getPrimaryServices();

    if (!services) {
      console.error("Failed to connect to service.");
      return;
    }
    console.log("Services: ", services);

    setIsConnected(true);
  };

  return {
    connect,
    isConnected,
  };
};
