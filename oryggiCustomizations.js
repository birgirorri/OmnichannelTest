function lcwCustomization() {
    return {
    //    preChatSurveyPaneProps: {
    //        controlProps: {
    //            payload: "{\"type\":\"AdaptiveCard\",\"version\":\"1.3\",\"body\":[{\"type\":\"TextBlock\",\"text\":\"\"},{\"type\":\"TextBlock\",\"text\":\" Nafn\"},{\"type\":\"Input.Text\",\"isRequired\":true,\"errorMessage\":\"Vinsamlegast fyllið út\"},{\"type\":\"TextBlock\",\"text\":\" Netfang\"},{\"type\":\"Input.Text\"},{\"type\":\"TextBlock\",\"text\":\" Veldu þjónustu\"},{\"type\":\"Input.ChoiceSet\",\"value\":\"{\\\"Value\\\":\\\"-\\\"}\",\"style\":\"compact\",\"isMultiSelect\":false,\"choices\":[{\"title\":\"-\",\"value\":\"{\\\"Value\\\":\\\"-\\\"}\"},{\"title\":\"Þjónusta\",\"value\":\"{\\\"Value\\\":\\\"Þjónusta\\\"}\"},{\"title\":\"Annað\",\"value\":\"{\\\"Value\\\":\\\"Annað\\\"}\"},{\"title\":\"Sala\",\"value\":\"{\\\"Value\\\":\\\"Sala\\\"}\"}],\"isRequired\":true,\"errorMessage\":\"Vinsamlegast fyllið út\"},{\"type\":\"Input.Toggle\",\"title\":\" Samþykki Persónuverndarstefnu Orkusölunar sem finna má *[hér](https://www.orkusalan.is/personuverndarstefna)*. Vinsamlegast deilið ekki viðkvæmum persónuupplýsingum í netspjalli. \",\"valueOn\":true,\"valueOff\":false,\"value\":false,\"wrap\":true,\"isRequired\":true,\"errorMessage\":\"Vinsamlegast fyllið út\"},{\"type\":\"TextBlock\",\"text\":\"\",\"wrap\":true}],\"actions\":[{\"type\":\"Action.Submit\",\"data\":{\"Type\":\"InputSubmit\"},\"title\":\"SENDA\"}]}"
    //        }
    //    },

        chatButtonProps: {
            styleProps: {
                generalStyleProps: {
                    selectors: {
                        ":focus": {
                            outline: "none"
                        }
                    }
                }
            }
        },

        headerProps: {
            // styleProps: {
            //     closeButtonHoverStyleProps: {
            //         backgroundColor: "#3370B7",
            //         color: "#fff",
            //         filter: "brightness(0.9)"
            //     },
            //     minimizeButtonHoverStyleProps: {
            //         filter: "brightness(0.9)",
            //         color: "#fff",
            //         backgroundColor: "#3370B7"
            //     }
            // },
            controlProps: {
                closeButtonProps: {
                    ariaLabel: "Loka"
                },
                minimizeButtonProps: {
                    ariaLabel: "Minnka"
                }
            }
        },

        outOfOfficeHeaderProps: {

            controlProps: {
                minimizeButtonProps: {
                    ariaLabel: "Minnka"
                }
            }
        },

        webChatContainerProps: {
            webChatStyles: {
                sendBoxPlaceholderColor: "#fff"
            },
            localizedTexts: {
                MIDDLEWARE_TYPING_INDICATOR_ONE: "{0} er að skrifa ...",
                MIDDLEWARE_MESSAGE_SENDING: "Sendist ...",
                MIDDLEWARE_BANNER_FILE_NULL_ERROR: "Villa við að bæta við skjali, vinsamlegast reyndu aftur",
                MIDDLEWARE_BANNER_FILE_WITHOUT_EXTENSION: "Mistókst að bæta við skjali, vinsamlegast reyndu aftur",
                MIDDLEWARE_BANNER_ERROR_MESSAGE: "Mistókst að bæta við skjali, vinsamlegast reyndu aftur",
                MIDDLEWARE_BANNER_INTERNET_BACK_ONLINE: "Þú ert tengd/ur aftur",
                MIDDLEWARE_BANNER_NO_INTERNET_CONNECTION: "Næ ekki tengingu - Kannaðu netsambandið og reyndu aftur",
                MIDDLEWARE_MAX_CHARACTER_COUNT_EXCEEDED: "Þessi skilaboð eru of löng - Vinsamlegast styttu þau áður en þú sendir",
                MIDDLEWARE_TYPING_INDICATOR_TWO: "{0} og {1} eru að skrifa ...",
                MIDDLEWARE_MESSAGE_NOT_DELIVERED: "Ekki sent",
                MIDDLEWARE_MESSAGE_RETRY: "Reyndu aftur",
                PRECHAT_REQUIRED_FIELD_MISSING_MESSAGE: "Þú verður að fylla út {0}",
                MIDDLEWARE_TYPING_INDICATOR_MULTIPLE: "{0} fulltrúar eru að skrifa ...",
                MIDDLEWARE_BANNER_CHAT_DISCONNECT: "Náði ekki að tengjast. Fyrir frekari aðstoð, vinsamlegast byrjaðu nýtt spjall."
            }
        },

        loadingPaneProps: {
            controlProps: {
                titleText: "Netspjall Orkusölunar",
                subtitleText: "",
                spinnerText: "Hinkrið aðeins ..."
            },
            styleProps:{
                iconStyleProps:{
                    //backgroundColor: "#3370B7",
                    //borderRadius: "0"
                    boxShadow: "none"
                }
            }
        },

        outOfOfficeHoursPaneProps: {
            controlProps: {
                titleText: "Spjallið okkar er opið alla virka daga 8-16 nema föstudaga 8-15"
            }
        },

        footerProps: {
            controlProps: {
                downloadTranscriptButtonProps: {
                    ariaLabel: "Sækja afrit af spjallinu"
                }
            },
            styleProps: {
                downloadTranscriptButtonStyleProps: {
                    icon: {
                        color: "#381068"
                    }
                },
                audioNotificationButtonStyleProps: {
                    icon: {
                        color: "#381068"
                    }
                }
                // downloadTranscriptButtonHoverStyleProps: {
                //     filter: "none",
                //     backgroundColor: "#F3F2F1"
                // }
            }
        },

        confirmationPaneProps: {
            controlProps: {
                titleText: "Viltu loka spjallinu?",
                subtitleText: "Til að fá afrit veldu \"Nei\" og veldu að sækja afrit neðst í vinstra horni",
                confirmButtonText: "Já",
                confirmButtonAriaLabel: "Já",
                cancelButtonText: "Nei",
                cancelButtonAriaLabel: "Nei",
            }
        }
    }
}

