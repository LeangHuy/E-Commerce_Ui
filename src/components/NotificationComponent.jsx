'use client'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import OneSignal from 'react-onesignal';

function NotificationComponent({ userId }) {
    const [subscriptionId, setSubscriptionId] = useState(null);

    useEffect(() => {
        OneSignal.init({ appId: "34175997-5ddc-4828-a6ae-f7ccc64b22c1" })
            .then(() => {
                setSubscriptionId(OneSignal.User.PushSubscription.id);
                OneSignal.User.addAlias(
                    "external_id",
                    userId
                );
            })
            .catch((error) => {
                console.error("OneSignal initialization failed:", error);
            });
    }, []);

}

export default NotificationComponent
