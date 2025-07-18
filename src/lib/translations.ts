
export interface Translation {
  header: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      email: {
        title: string;
        description: string;
      };
      phone: {
        title: string;
        description: string;
      };
      office: {
        title: string;
        address: string;
      };
    };
    form: {
      name: string;
      email: string;
      specialty: string;
      message: string;
      placeholders: {
        name: string;
        email: string;
        specialty: string;
        message: string;
      };
      validation: {
        name: string;
        email: string;
        specialty: string;
        messageMin: string;
        messageMax: string;
      };
      submit: string;
      sending: string;
    };
    specialties: {
      arthroscopy: string;
      hysteroscopy: string;
      urology: string;
      general: string;
    };
    toast: {
      success: {
        title: string;
      };
      failure: {
        title: string;
      };
      error: {
        title: string;
        description: string;
      };
    };
  };
}

const en: Translation = {
  header: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Have a question or need support? Reach out to our team.",
    info: {
      email: {
        title: "Email",
        description: "Our support team is available 24/7.",
      },
      phone: {
        title: "Phone",
        description: "Speak with our specialists directly.",
      },
      office: {
        title: "Office",
        address: "123 Innovation Drive\nNavi Mumbai, India",
      },
    },
    form: {
      name: "Full Name",
      email: "Email Address",
      specialty: "Specialty",
      message: "Message",
      placeholders: {
        name: "John Doe",
        email: "you@example.com",
        specialty: "Select a specialty",
        message: "Tell us how we can help...",
      },
      validation: {
        name: "Name must be at least 2 characters.",
        email: "Please enter a valid email address.",
        specialty: "Please select a specialty.",
        messageMin: "Message must be at least 10 characters.",
        messageMax: "Message must be less than 500 characters.",
      },
      submit: "Send Message",
      sending: "Sending...",
    },
    specialties: {
      arthroscopy: "Arthroscopy",
      hysteroscopy: "Hysteroscopy",
      urology: "Urology",
      general: "General Inquiry",
    },
    toast: {
      success: {
        title: "Message Sent!",
      },
      failure: {
        title: "Submission Failed",
      },
      error: {
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      },
    },
  },
};

const hi: Translation = {
  header: {
    home: "होम",
    products: "उत्पाद",
    about: "हमारे बारे में",
    contact: "संपर्क",
  },
  contact: {
    title: "हमसे संपर्क करें",
    subtitle: "कोई प्रश्न है या सहायता चाहिए? हमारी टीम से संपर्क करें।",
    info: {
      email: {
        title: "ईमेल",
        description: "हमारी सहायता टीम 24/7 उपलब्ध है।",
      },
      phone: {
        title: "फ़ोन",
        description: "हमारे विशेषज्ञों से सीधे बात करें।",
      },
      office: {
        title: "कार्यालय",
        address: "123 इनोवेशन ड्राइव\nनवी मुंबई, भारत",
      },
    },
    form: {
      name: "पूरा नाम",
      email: "ईमेल पता",
      specialty: "विशेषज्ञता",
      message: "संदेश",
      placeholders: {
        name: "जॉन डो",
        email: "you@example.com",
        specialty: "एक विशेषज्ञता चुनें",
        message: "बताएं कि हम कैसे मदद कर सकते हैं...",
      },
      validation: {
        name: "नाम कम से कम 2 अक्षरों का होना चाहिए।",
        email: "कृपया एक वैध ईमेल पता दर्ज करें।",
        specialty: "कृपया एक विशेषज्ञता चुनें।",
        messageMin: "संदेश कम से कम 10 अक्षरों का होना चाहिए।",
        messageMax: "संदेश 500 अक्षरों से कम होना चाहिए।",
      },
      submit: "संदेश भेजें",
      sending: "भेज रहा है...",
    },
    specialties: {
      arthroscopy: "आर्थ्रोस्कोपी",
      hysteroscopy: "हिस्टेरोस्कोपी",
      urology: "यूरोलॉजी",
      general: "सामान्य पूछताछ",
    },
    toast: {
      success: {
        title: "संदेश भेजा गया!",
      },
      failure: {
        title: "सबमिशन विफल",
      },
      error: {
        title: "त्रुटि",
        description: "एक अप्रत्याशित त्रुटि हुई। कृपया पुनः प्रयास करें।",
      },
    },
  },
};

export const translations = { en, hi };
