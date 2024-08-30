import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
 <path d="m44.285 32.957c4.4453 0 8.4727 1.8008 11.383 4.7148 2.9141 2.9141 4.7148 6.9375 4.7148 11.383 0 4.4453-1.8008 8.4688-4.7148 11.383-2.9141 2.9141-6.9375 4.7148-11.383 4.7148-4.4453 0-8.4688-1.8008-11.383-4.7148-2.9141-2.9141-4.7148-6.9375-4.7148-11.383 0-4.4453 1.8008-8.4688 4.7148-11.383 2.9141-2.9141 6.9375-4.7148 11.383-4.7148zm-24.27 42.676c-0.015625 0.035157-0.03125 0.070313-0.050781 0.10156-0.23438 0.51953-0.24219 1.0859-0.070313 1.5859 0.17578 0.5 0.53516 0.93359 1.0391 1.1953 0.035156 0.015625 0.070312 0.03125 0.10156 0.050781 0.51953 0.23438 1.0859 0.24219 1.5859 0.070313 0.51562-0.17969 0.96484-0.55859 1.2227-1.0938 0.13672-0.28125 0.20312-0.57812 0.21094-0.87109 0-0.019531-0.003907-0.035156-0.003907-0.054687 0-0.019532 0-0.035157 0.003907-0.054688-0.007813-0.22266-0.046876-0.44531-0.12109-0.65234-0.17969-0.51562-0.55859-0.96484-1.0938-1.2227s-1.1211-0.27344-1.6367-0.089844c-0.48828 0.16797-0.92578 0.52734-1.1875 1.0352zm-1.918 2.3164c0.34375 0.98047 1.0586 1.8281 2.0664 2.3125l0.003907 0.003906c1.0078 0.48438 2.1133 0.51562 3.0938 0.17188 0.95703-0.33594 1.7891-1.0234 2.2773-1.9961 0.027344-0.046875 0.050782-0.09375 0.070313-0.14062 0.10938-0.23828 0.19531-0.48438 0.25391-0.73047h4.1523c0.52734 0 0.95703-0.42969 0.95703-0.95703v-7.1914c3.5781 2.3438 7.8086 3.7695 12.363 3.9453v5.2539c-0.30859 0.070312-0.61328 0.17578-0.91406 0.32031l-0.003906 0.003906c-1.0703 0.51563-1.832 1.418-2.1992 2.4609-0.36328 1.0391-0.33203 2.2188 0.18359 3.293v0.003906c0.51562 1.0703 1.418 1.832 2.4609 2.1992 1.0391 0.36328 2.2188 0.33203 3.293-0.18359h0.003906c1.0703-0.51562 1.832-1.418 2.1992-2.4609 0.36328-1.0391 0.33203-2.2188-0.18359-3.293l-0.003906-0.003906c-0.51562-1.0703-1.418-1.832-2.4609-2.1992-0.15234-0.054688-0.30859-0.097657-0.46484-0.13281v-5.2539c5.5234-0.21484 10.578-2.2695 14.559-5.5703l4.8047 3.2422c-0.10156 0.51172-0.13281 1.0234-0.10156 1.5195 0.089844 1.4102 0.70703 2.6836 1.8359 3.4727l17.414 12.199c0.019532 0.015625 0.042969 0.035157 0.0625 0.046875 1.1211 0.78125 2.5195 0.92578 3.8672 0.53125 1.2539-0.37109 2.4766-1.2227 3.3672-2.4688 0.019531-0.019531 0.035156-0.042968 0.050781-0.066406l4.5625-6.5508c0.89062-1.2812 1.2852-2.7539 1.1992-4.0898-0.089844-1.4102-0.70703-2.6836-1.8359-3.4688l-17.414-12.203c-0.019532-0.015625-0.042969-0.035156-0.0625-0.050781-1.125-0.78125-2.5234-0.92969-3.875-0.53125-0.38281 0.11328-0.76172 0.26953-1.1289 0.46875l-5.0703-3.4219c0.64844-2.0391 1.0352-4.1953 1.1211-6.4258h8.8555c0.066407 0.27344 0.16016 0.53906 0.28906 0.80469 0.48438 1.0078 1.3359 1.7227 2.3125 2.0664 0.98047 0.34375 2.0898 0.3125 3.0977-0.17578 1.0078-0.48438 1.7227-1.3359 2.0664-2.3125 0.33984-0.98047 0.3125-2.0898-0.17578-3.0977-0.48438-1.0078-1.3359-1.7227-2.3125-2.0664-0.98047-0.33984-2.0898-0.3125-3.0977 0.17578-1.0078 0.48438-1.7227 1.3359-2.0664 2.3125-0.042968 0.125-0.082031 0.25-0.11328 0.37891h-8.8555c-0.12109-3.1562-0.84766-6.1562-2.0586-8.8945l10.508 0.007812c0.52734 0 0.95703-0.42969 0.95703-0.95703v-4.1523c0.27344-0.066406 0.53906-0.16016 0.80469-0.28906 1.0078-0.48438 1.7227-1.3359 2.0664-2.3164 0.33984-0.97656 0.3125-2.0859-0.17188-3.0938l-0.003906-0.003907c-0.48438-1.0078-1.3359-1.7227-2.3125-2.0664-0.97656-0.33984-2.0859-0.3125-3.0898 0.17188l-0.003906 0.003906c-1.0078 0.48438-1.7227 1.3359-2.0664 2.3164-0.34375 0.97656-0.3125 2.0859 0.17578 3.0977 0.48438 1.0078 1.3359 1.7227 2.3125 2.0664 0.125 0.042969 0.25 0.082031 0.37891 0.11328v3.1953h-10.504c-1.1094-2.0039-2.4922-3.8359-4.1016-5.4453-0.625-0.625-1.2852-1.2148-1.9766-1.7695l0.003906-6.7539h3.1953c0.066406 0.26953 0.16016 0.53906 0.28516 0.80078v0.003906c0.48438 1.0078 1.3359 1.7227 2.3125 2.0664 0.98047 0.34375 2.0898 0.3125 3.0977-0.17578 1.0078-0.48438 1.7227-1.3359 2.0664-2.3164 0.34375-0.97656 0.3125-2.0898-0.17578-3.0977-0.48438-1.0078-1.3359-1.7227-2.3125-2.0664-0.97656-0.33984-2.0859-0.3125-3.0898 0.17188h-0.003907c-1.0078 0.48437-1.7227 1.3359-2.0664 2.3164-0.042969 0.125-0.082031 0.25-0.11328 0.37891h-4.1523c-0.52734 0-0.95703 0.42969-0.95703 0.95703v6.3203c-3.5781-2.3438-7.8086-3.7695-12.363-3.9453v-5.2539c0.15625-0.035156 0.3125-0.082031 0.46484-0.13281 1.043-0.36328 1.9453-1.125 2.4609-2.1992l0.003906-0.003906c0.51562-1.0703 0.54688-2.25 0.18359-3.293s-1.125-1.9453-2.1992-2.4609c-1.0703-0.51562-2.25-0.54688-3.293-0.18359-1.043 0.36328-1.9453 1.125-2.4609 2.1992v0.003906c-0.51562 1.0703-0.54688 2.25-0.18359 3.293s1.125 1.9453 2.1992 2.4609h0.003906c0.29688 0.14453 0.60547 0.25 0.91406 0.32031v5.2539c-4.5273 0.17578-8.7344 1.5859-12.301 3.9062l-0.066406-6.207c0.003906-0.023437 0.003906-0.050781 0.003906-0.074218 0-0.52734-0.42969-0.95703-0.95703-0.95703h-4.1523c-0.03125-0.12891-0.070312-0.25391-0.11328-0.37891-0.34375-0.98047-1.0586-1.8281-2.0664-2.3164h-0.003906c-1.0078-0.48438-2.1133-0.51562-3.0938-0.17188-0.98047 0.34375-1.8281 1.0586-2.3125 2.0664-0.48438 1.0078-0.51563 2.1172-0.17578 3.0977 0.34375 0.98047 1.0586 1.8281 2.0664 2.3164 1.0078 0.48437 2.1172 0.51562 3.0977 0.17578 0.98047-0.34375 1.8281-1.0586 2.3125-2.0664v-0.003906c0.125-0.26172 0.22266-0.52734 0.28516-0.80078h3.207l0.070313 6.6875c-0.72266 0.57422-1.4102 1.1875-2.0586 1.8398-1.6055 1.6055-2.9922 3.4414-4.1016 5.4453l-10.5-0.007812v-3.1953c0.12891-0.03125 0.25391-0.070312 0.37891-0.11328 0.98047-0.34375 1.8281-1.0586 2.3164-2.0664 0.48438-1.0078 0.51562-2.1172 0.17578-3.0977-0.34375-0.98047-1.0586-1.8281-2.0664-2.3164l-0.003906-0.003906c-1.0078-0.48438-2.1133-0.51562-3.0898-0.17188-0.98047 0.34375-1.8281 1.0586-2.3164 2.0664v0.003907c-0.48438 1.0078-0.51562 2.1133-0.17188 3.0938 0.34375 0.98047 1.0586 1.8281 2.0664 2.3164 0.26172 0.125 0.53125 0.22266 0.80469 0.28906v4.1523c0 0.52734 0.42969 0.95703 0.95703 0.95703h10.508c-1.2109 2.7383-1.9375 5.7383-2.0586 8.8945h-8.8555c-0.03125-0.12891-0.070313-0.25391-0.11328-0.37891-0.34375-0.98047-1.0586-1.8281-2.0664-2.3125l-0.003906-0.003906c-1.0078-0.48438-2.1133-0.51562-3.0938-0.17188s-1.8281 1.0586-2.3125 2.0664c-0.48438 1.0078-0.51562 2.1172-0.17578 3.0977 0.34375 0.98047 1.0586 1.8281 2.0664 2.3125 1.0078 0.48437 2.1172 0.51562 3.0977 0.17578 0.98047-0.34375 1.8281-1.0586 2.3164-2.0664v-0.003906c0.125-0.26172 0.22266-0.52734 0.28516-0.80078h8.8555c0.12109 3.1562 0.84766 6.1562 2.0586 8.8945l-10.512-0.003906c-0.52734 0-0.95703 0.42969-0.95703 0.95703v4.1523c-0.12891 0.03125-0.25391 0.070313-0.37891 0.11328-0.98047 0.34375-1.8281 1.0586-2.3125 2.0664v0.003907c-0.48438 1.0078-0.51562 2.1133-0.17578 3.0938 0.34375 0.98047 1.0586 1.8281 2.0664 2.3164h0.003906c1.0078 0.48438 2.1133 0.51562 3.0938 0.17188 0.95703-0.33594 1.7891-1.0234 2.2773-1.9961 0.027344-0.046875 0.050781-0.09375 0.070313-0.14062 0.45312-0.98828 0.47656-2.0703 0.14062-3.0234-0.33594-0.95703-1.0234-1.7891-1.9961-2.2773-0.046875-0.027344-0.09375-0.050781-0.14062-0.066406-0.23828-0.10938-0.48438-0.19531-0.73047-0.25391v-3.1953h10.504c1.1094 2.0039 2.4922 3.8359 4.1016 5.4453 0.625 0.625 1.2852 1.2188 1.9766 1.7734 0 0.019531-0.003906 0.039063-0.003906 0.058594v7.5625h-3.1953c-0.03125-0.12891-0.070313-0.25391-0.11328-0.37891-0.33594-0.95703-1.0234-1.7891-1.9961-2.2773-0.046874-0.027344-0.09375-0.050781-0.14062-0.070313-0.98828-0.45312-2.0703-0.47656-3.0234-0.14062-0.98047 0.34375-1.8281 1.0586-2.3125 2.0664v0.003906c-0.49609 0.99219-0.52734 2.1016-0.18359 3.0781zm29.996-18.156c0.85156-0.41016 1.457-1.1289 1.7461-1.957 0.28906-0.82813 0.26172-1.7656-0.14844-2.6172s-1.1289-1.457-1.957-1.7461c-0.82812-0.28906-1.7656-0.26172-2.6172 0.14844-0.85156 0.41016-1.457 1.1289-1.7461 1.957-0.019532 0.054687-0.039063 0.11328-0.054688 0.17188h-5.0078c-0.52734 0-0.95703 0.42969-0.95703 0.95703 0 0.52734 0.42969 0.95703 0.95703 0.95703h5.0078c0.050782 0.17969 0.12109 0.35547 0.20312 0.53125 0.41016 0.85156 1.1289 1.457 1.957 1.7461 0.82813 0.28906 1.7656 0.26172 2.6172-0.14844zm-1.9883-1.6562c0.36719 0.12891 0.78125 0.11719 1.1602-0.066407 0.37891-0.18359 0.64453-0.5 0.77344-0.86328 0.12891-0.36719 0.11719-0.78125-0.066406-1.1602s-0.5-0.64453-0.86328-0.77344c-0.36719-0.12891-0.78125-0.11719-1.1602 0.066406-0.37891 0.18359-0.64453 0.5-0.77344 0.86328-0.050781 0.14453-0.078125 0.29297-0.085937 0.44922v0.054687 0.054688c0.007812 0.20312 0.054687 0.41016 0.14844 0.60547 0.18359 0.375 0.5 0.64453 0.86719 0.76953zm-2.2891-8.1367 5.4258-0.007812c0.054687 0.23828 0.13672 0.47656 0.25 0.70703l0.003906 0.003906c0.41016 0.85156 1.1289 1.457 1.957 1.7461 0.82422 0.28906 1.7617 0.26172 2.6133-0.14453h0.003906c0.85156-0.41016 1.457-1.1289 1.7461-1.957 0.28906-0.82812 0.26172-1.7656-0.14844-2.6172-0.41016-0.85156-1.1289-1.457-1.957-1.7461-0.82813-0.28906-1.7656-0.26172-2.6172 0.14844-0.85156 0.41016-1.457 1.1289-1.7461 1.957l-5.5312 0.007812c-0.52734 0-0.95312 0.42578-0.95312 0.95312 0 0.51953 0.42578 0.94922 0.95312 0.94922zm9.375 0.60156c0.03125-0.019531 0.0625-0.035156 0.097656-0.046874 0.35156-0.18359 0.60156-0.49219 0.72656-0.83984 0.12891-0.36719 0.11719-0.78125-0.066406-1.1602-0.18359-0.37891-0.5-0.64453-0.86328-0.77344-0.36719-0.12891-0.78125-0.11719-1.1602 0.066406-0.37891 0.18359-0.64453 0.5-0.77344 0.86328-0.12109 0.35156-0.11719 0.74609 0.042968 1.1094 0.019532 0.03125 0.035157 0.0625 0.046876 0.097657 0.18359 0.35156 0.49219 0.60156 0.83984 0.72656 0.34766 0.125 0.74219 0.11719 1.1094-0.042969zm-7.0938-5.7969c0.85156-0.41016 1.457-1.1289 1.7461-1.957s0.26172-1.7656-0.14844-2.6172c-0.41016-0.85156-1.1289-1.457-1.957-1.7461s-1.7656-0.26172-2.6172 0.14844c-0.85156 0.41016-1.457 1.1289-1.7461 1.957-0.019531 0.058594-0.039062 0.11719-0.054688 0.17578l-5.4805 0.007813c-0.52734 0-0.95312 0.42578-0.95312 0.95312 0 0.52734 0.42578 0.95313 0.95312 0.95313l5.4805-0.007813c0.050782 0.17969 0.12109 0.35938 0.20313 0.53516 0.41016 0.85156 1.1289 1.457 1.957 1.7461s1.7656 0.26172 2.6172-0.14844zm-1.9883-1.6523c0.36719 0.12891 0.78125 0.11719 1.1602-0.066406 0.37891-0.18359 0.64453-0.5 0.77344-0.86328 0.12891-0.36719 0.11719-0.78125-0.066407-1.1602-0.18359-0.37891-0.5-0.64453-0.86328-0.77344-0.36719-0.12891-0.78125-0.11719-1.1602 0.066407-0.37891 0.18359-0.64453 0.5-0.77344 0.86328-0.12891 0.36719-0.11719 0.78125 0.066406 1.1602 0.17969 0.37891 0.49609 0.64453 0.86328 0.77344zm-0.61719 41.945c-0.5625-0.19531-1.0547-0.60156-1.3477-1.1719-0.015625-0.035156-0.03125-0.070312-0.050781-0.10547-0.26562-0.58594-0.27734-1.2227-0.082031-1.7852 0.19531-0.5625 0.60156-1.0547 1.1719-1.3477 0.035156-0.015625 0.070312-0.03125 0.10547-0.050781 0.30469-0.13672 0.62109-0.20703 0.93359-0.21484 0.019532 0 0.039063 0.003906 0.054688 0.003906 0.019531 0 0.039062 0 0.054687-0.003906 0.25391 0.007813 0.50391 0.050781 0.73828 0.13281 0.5625 0.19531 1.0547 0.60156 1.3438 1.1719 0.015626 0.035157 0.03125 0.070313 0.050782 0.10547 0.26562 0.58594 0.27734 1.2227 0.078125 1.7852-0.19531 0.5625-0.60156 1.0547-1.1758 1.3438-0.035157 0.015624-0.070313 0.03125-0.10547 0.050781-0.56641 0.27344-1.207 0.28516-1.7695 0.085937zm1.8906-71.953c0.57031 0.29297 0.97656 0.78125 1.1758 1.3438 0.19531 0.56641 0.18359 1.2031-0.078125 1.7852-0.019531 0.035156-0.035157 0.070312-0.050781 0.10547-0.29297 0.57031-0.78125 0.97656-1.3438 1.1719-0.23828 0.082031-0.48438 0.12891-0.73828 0.13281-0.019531 0-0.039062-0.003906-0.054687-0.003906-0.019531 0-0.039063 0-0.054688 0.003906-0.31641-0.007813-0.63281-0.078125-0.93359-0.21484-0.035157-0.019531-0.070313-0.035156-0.10547-0.050781-0.57031-0.29297-0.97656-0.78125-1.1719-1.3438-0.19531-0.56641-0.18359-1.2031 0.082031-1.7852 0.019531-0.035156 0.035156-0.070312 0.050781-0.10547 0.29297-0.57031 0.78125-0.97656 1.3477-1.1719 0.5625-0.19531 1.1992-0.18359 1.7852 0.078125 0.019531 0.023437 0.054687 0.039062 0.089843 0.054687zm23.293 9.9297c-0.17969 0.51562-0.55859 0.96484-1.0938 1.2227-0.53516 0.25781-1.1211 0.27344-1.6367 0.09375-0.5-0.17578-0.93359-0.53516-1.1953-1.043-0.015625-0.035156-0.03125-0.070312-0.050781-0.10156-0.12109-0.26953-0.17969-0.54688-0.1875-0.82422v-0.054687-0.054688c0.007812-0.22266 0.046875-0.44531 0.12109-0.65234 0.17578-0.5 0.53516-0.93359 1.0391-1.1953 0.035156-0.015625 0.070313-0.03125 0.10156-0.050782 0.51953-0.23437 1.0859-0.24219 1.5859-0.070312 0.51562 0.17969 0.96484 0.55859 1.2227 1.0938 0.25781 0.53125 0.27344 1.1172 0.09375 1.6367zm10.398 7.793c-0.17969 0.51562-0.55859 0.96484-1.0938 1.2227-0.28125 0.13672-0.58203 0.20703-0.875 0.21094-0.019531 0-0.039063-0.003906-0.054688-0.003906-0.019531 0-0.039062 0-0.054687 0.003906-0.22266-0.007812-0.44531-0.046875-0.65234-0.12109-0.51562-0.17969-0.96484-0.55859-1.2227-1.0938-0.25781-0.53516-0.27344-1.1211-0.09375-1.6367 0.17578-0.5 0.53516-0.93359 1.043-1.1953 0.035157-0.015625 0.070313-0.03125 0.10156-0.050781 0.51953-0.23438 1.0859-0.24219 1.5859-0.070313 0.5 0.17578 0.93359 0.53516 1.1953 1.043 0.015625 0.035157 0.03125 0.070313 0.050781 0.10156 0.23828 0.52344 0.24609 1.0898 0.070313 1.5898zm4.3438 18.895c-0.17969 0.51562-0.55859 0.96484-1.0938 1.2227-0.53516 0.25781-1.1211 0.27344-1.6367 0.09375s-0.96484-0.55859-1.2227-1.0938c-0.13672-0.28125-0.20703-0.58203-0.21094-0.875 0-0.019531 0.003906-0.039063 0.003906-0.054687 0-0.019532 0-0.039063-0.003906-0.054688 0.007813-0.22266 0.046875-0.44531 0.12109-0.65234 0.17969-0.51562 0.55859-0.96484 1.0938-1.2227s1.1211-0.27344 1.6367-0.09375 0.96484 0.55859 1.2227 1.0938 0.27344 1.1211 0.089844 1.6367zm-73.801 17.207c0.26172-0.50781 0.69531-0.86719 1.1953-1.043 0.21094-0.074219 0.42969-0.11328 0.65234-0.12109h0.054687 0.054688c0.29297 0.007812 0.58984 0.074218 0.87109 0.21094 0.53516 0.25781 0.91406 0.70703 1.0938 1.2227 0.17969 0.51953 0.16406 1.1055-0.09375 1.6367-0.25781 0.53516-0.70703 0.91406-1.2227 1.0938-0.5 0.17578-1.0664 0.16406-1.5859-0.070312-0.035157-0.019532-0.066407-0.035157-0.10156-0.050782-0.50781-0.26172-0.86719-0.69531-1.043-1.1953-0.17578-0.5-0.16406-1.0664 0.070312-1.5859 0.023438-0.027344 0.039062-0.0625 0.054688-0.097656zm10.375-45.531c0.25781-0.53516 0.70703-0.91406 1.2227-1.0938 0.5-0.17578 1.0664-0.16406 1.5859 0.070312 0.035157 0.019532 0.066407 0.035157 0.10156 0.050782 0.50781 0.26172 0.86719 0.69531 1.043 1.1953 0.074219 0.21094 0.11328 0.42969 0.12109 0.65234 0 0.019531-0.003906 0.035156-0.003906 0.054688 0 0.019531 0 0.039062 0.003906 0.054687-0.007812 0.27734-0.066406 0.55469-0.1875 0.82422-0.019531 0.035156-0.035156 0.066406-0.050781 0.10156-0.26172 0.50781-0.69531 0.86719-1.1953 1.043-0.51953 0.17969-1.1055 0.16406-1.6367-0.09375-0.53516-0.25781-0.91406-0.70703-1.0938-1.2227-0.18359-0.51953-0.16797-1.1055 0.089844-1.6367zm-10.426 7.8438c0.019532-0.035156 0.035156-0.066406 0.050782-0.10156 0.26172-0.50781 0.69531-0.86719 1.1953-1.043s1.0664-0.16406 1.5859 0.070312c0.035156 0.019531 0.066406 0.035157 0.10156 0.050781 0.50781 0.26172 0.86719 0.69531 1.043 1.1953 0.17969 0.51953 0.16406 1.1055-0.09375 1.6367-0.25781 0.53516-0.70703 0.91406-1.2227 1.0938-0.20703 0.074218-0.42969 0.11328-0.65234 0.12109-0.019531 0-0.035157-0.003907-0.054688-0.003907s-0.039062 0-0.054687 0.003907c-0.29297-0.007813-0.58984-0.074219-0.875-0.21094-0.53516-0.25781-0.91406-0.70703-1.0938-1.2227-0.17188-0.50391-0.16406-1.0703 0.070312-1.5898zm-4.3203 18.844c0.25781-0.53516 0.70703-0.91406 1.2227-1.0938 0.5-0.17578 1.0664-0.16406 1.5859 0.070312 0.035156 0.019532 0.066406 0.035157 0.10156 0.050782 0.50781 0.26172 0.86719 0.69531 1.043 1.1953 0.074219 0.20703 0.11328 0.42969 0.12109 0.65234v0.054688 0.054687c-0.007812 0.27734-0.070312 0.55469-0.1875 0.82422-0.019531 0.035156-0.035156 0.066406-0.050781 0.10156-0.26172 0.50781-0.69531 0.86719-1.1953 1.043-0.51953 0.17969-1.1055 0.16406-1.6367-0.09375-0.53906-0.25391-0.91797-0.70312-1.0977-1.2227-0.17969-0.51562-0.16406-1.1016 0.09375-1.6367zm61.562 10.164 4.1445 2.7969c-0.22266 0.23437-0.43359 0.48828-0.63281 0.76172-0.019531 0.019532-0.035156 0.042969-0.050781 0.066406l-4.5664 6.5586c-0.16016 0.23047-0.30469 0.46875-0.43359 0.71094l-4.0039-2.6992c0.074219-0.074219 0.14844-0.14844 0.22656-0.22266 2.2617-2.2617 4.082-4.9648 5.3164-7.9727zm-6.668-25.086c-4.0586-4.0586-9.6641-6.5664-15.855-6.5664s-11.797 2.5078-15.855 6.5664c-4.0586 4.0586-6.5664 9.6641-6.5664 15.855s2.5078 11.797 6.5664 15.855c4.0586 4.0586 9.6641 6.5664 15.855 6.5664s11.797-2.5078 15.855-6.5664c4.0586-4.0586 6.5664-9.6641 6.5664-15.855 0-6.1953-2.5078-11.801-6.5664-15.855zm11.695 29.809 0.003906-0.007813c0.011718-0.019531 0.023437-0.039062 0.035156-0.054687 0.63281-0.87891 1.4805-1.4766 2.3398-1.7305 0.80469-0.23828 1.6172-0.16406 2.2461 0.26953 0.019531 0.011719 0.039062 0.027344 0.058593 0.039063l17.418 12.207c0.62109 0.43359 0.96875 1.1797 1.0234 2.0273 0.058593 0.92578-0.22656 1.9609-0.86328 2.8789l-4.5625 6.5508c-0.011718 0.019532-0.027344 0.039063-0.039062 0.058594-0.63281 0.88281-1.4805 1.4805-2.3477 1.7383-0.80469 0.23828-1.6133 0.16406-2.2383-0.26953-0.019531-0.015625-0.039062-0.027344-0.0625-0.039062l-17.418-12.207c-0.62109-0.4375-0.96484-1.1797-1.0195-2.0273-0.058594-0.92578 0.22266-1.957 0.86328-2.875zm-17.52-23.988c-2.5664-2.5664-6.1133-4.1523-10.031-4.1523-3.918 0-7.4648 1.5859-10.031 4.1523-2.5664 2.5664-4.1562 6.1133-4.1562 10.031 0 3.918 1.5859 7.4648 4.1562 10.031 2.5664 2.5664 6.1133 4.1523 10.031 4.1523 3.918 0 7.4648-1.5859 10.031-4.1523 2.5664-2.5664 4.1523-6.1133 4.1523-10.031 0.003906-3.918-1.5859-7.4609-4.1523-10.031z" fill-rule="evenodd"/>
</svg>
    ) ,
    title: "AI Research",
    paragraph:
      "Explore the future with our AI research. We focus on cutting-edge innovations to solve industry challenges and advance your business.",
  },
  {
    id: 1,
    icon:(
      <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
 <g>
  <path d="m65.789 31.68h-28.48c-2.25 0-4.0781 1.8281-4.0781 4.0781v28.48c0 2.25 1.8281 4.0781 4.0781 4.0781h28.48c2.25 0 4.0781-1.8281 4.0781-4.0781l0.003906-28.477c0-2.25-1.832-4.082-4.082-4.082zm2.082 32.559c0 1.1406-0.92969 2.0781-2.0781 2.0781l-28.484 0.003906c-1.1484 0-2.0781-0.92969-2.0781-2.0781v-28.48c0-1.1484 0.92969-2.0781 2.0781-2.0781h28.48c1.1484 0 2.0781 0.92969 2.0781 2.0781z"/>
  <path d="m89.969 38.941h-15.699v-6.5586c0-2.8203-2.2891-5.1094-5.1094-5.1094h-5.1094v-6.9883c0-0.48828 0.39062-0.87891 0.87891-0.87891h6.3086c0.51172 2.1484 2.6094 3.6992 4.9883 3.3008 1.8594-0.30859 3.3516-1.8789 3.5703-3.75 0.32031-2.6484-1.7383-4.9102-4.3281-4.9102-2.0586 0-3.7812 1.4414-4.2383 3.3594h-6.3086c-1.5898 0-2.8789 1.2891-2.8789 2.8789v6.9883h-6.0117v-15.234c0-0.48828 0.39062-0.87891 0.87891-0.87891h6.5508c0.51172 2.1484 2.6016 3.6992 4.9883 3.3008 1.8594-0.30859 3.3516-1.8789 3.5781-3.75 0.32812-2.6484-1.7383-4.9102-4.3281-4.9102-2.0586 0-3.7812 1.4414-4.2383 3.3594h-6.5508c-1.5898 0-2.8789 1.2891-2.8789 2.8789v15.238h-5.8281l-0.003906-12.059c0-0.19141-0.14844-0.33984-0.33984-0.33984h-1.3203c-0.19141 0-0.33984 0.14844-0.33984 0.33984v12.051h-5.3398v-11.871c0-1.5898-1.2891-2.8789-2.8789-2.8789h-3.9297c-0.51172-2.1484-2.6094-3.6992-4.9883-3.3008-1.8594 0.30859-3.3516 1.8789-3.5781 3.75-0.32812 2.6484 1.7383 4.9102 4.3281 4.9102 2.0586 0 3.7812-1.4414 4.2383-3.3594h3.9297c0.48828 0 0.87891 0.39062 0.87891 0.87891v11.871h-4.9297c-2.8203 0-5.1094 2.2891-5.1094 5.1094v6.5586h-4.9414c-0.19141 0-0.33984 0.14844-0.33984 0.33984v1.3203c0 0.19141 0.14844 0.33984 0.33984 0.33984h4.9414v11.078h-12.898c-0.48828 0-0.87891-0.39062-0.87891-0.87891v-5.2695c2.1484-0.51172 3.6992-2.6094 3.3008-4.9883-0.30859-1.8594-1.8789-3.3516-3.75-3.5781-2.6484-0.32812-4.9102 1.7383-4.9102 4.3281 0 2.0586 1.4414 3.7812 3.3594 4.2383v5.2617c0 1.5898 1.2891 2.8789 2.8789 2.8789h12.898v4.7109h-17.949c-0.19141 0-0.33984 0.14844-0.33984 0.33984v1.3203c0 0.19141 0.14844 0.33984 0.33984 0.33984h17.949v6.8789c0 2.8203 2.2891 5.1094 5.1094 5.1094h1.2305v8.8086c0 0.48047-0.39844 0.87891-0.87891 0.87891h-4.8516c-0.51172-2.1484-2.6016-3.6992-4.9883-3.3008-1.8594 0.30859-3.3516 1.8789-3.5781 3.75-0.32812 2.6484 1.7383 4.9102 4.3281 4.9102 2.0586 0 3.7812-1.4414 4.2383-3.3594h4.8516c1.5898 0 2.8789-1.2891 2.8789-2.8789v-8.8086h9.0781v15.238c0 0.48047-0.39062 0.87891-0.87891 0.87891h-4.6289c-0.51172-2.1484-2.6094-3.6992-4.9883-3.3008-1.8594 0.30859-3.3516 1.8789-3.5703 3.75-0.32031 2.6484 1.7383 4.9102 4.3281 4.9102 2.0586 0 3.7812-1.4414 4.2383-3.3594h4.6289c1.5898 0 2.8789-1.2891 2.8789-2.8789l0.003906-15.215h8.1211v9.9297c0 0.19141 0.14844 0.33984 0.33984 0.33984h1.3203c0.19141 0 0.33984-0.14844 0.33984-0.33984v-9.9297h7.0703v7.75c0 1.5898 1.2891 2.8789 2.8789 2.8789h5.0508c0.51172 2.1484 2.6016 3.6992 4.9883 3.3008 1.8594-0.30859 3.3516-1.8789 3.5781-3.75 0.32812-2.6484-1.7383-4.9102-4.3281-4.9102-2.0586 0-3.7812 1.4414-4.2383 3.3594h-5.0508c-0.48047 0-0.87891-0.39844-0.87891-0.87891v-7.75h1.7305c2.8203 0 5.1094-2.2891 5.1094-5.1094v-7.4297h9.6406c0.48047 0 0.87891 0.39062 0.87891 0.87891v5.4492c-2.1484 0.51172-3.6992 2.6094-3.3008 4.9883 0.32031 1.8594 1.8789 3.3516 3.75 3.5703 2.6484 0.32031 4.9102-1.75 4.9102-4.3281 0-2.0586-1.4414-3.7812-3.3594-4.2383v-5.4492c0-1.5898-1.2891-2.8789-2.8789-2.8789h-9.6406v-8.9492h10.699c0.19141 0 0.33984-0.14844 0.33984-0.33984v-1.3203c0-0.19141-0.14844-0.33984-0.33984-0.33984h-10.699v-6.2891h15.699c0.19141 0 0.33984-0.14844 0.33984-0.33984v-1.3203c-0.011718-0.19531-0.16016-0.34375-0.35156-0.34375zm-14.5-22.902c1.3008 0 2.3594 1.0586 2.3594 2.3594 0 1.3008-1.0586 2.3594-2.3594 2.3594s-2.3594-1.0586-2.3594-2.3594c0-1.2969 1.0625-2.3594 2.3594-2.3594zm-7.7695-8.2383c1.3008 0 2.3594 1.0586 2.3594 2.3594 0 1.3008-1.0586 2.3594-2.3594 2.3594s-2.3594-1.0586-2.3594-2.3594c0-1.3008 1.0586-2.3594 2.3594-2.3594zm-37.879 8.0781c-1.3008 0-2.3594-1.0586-2.3594-2.3594s1.0586-2.3594 2.3594-2.3594c1.3008 0 2.3594 1.0586 2.3594 2.3594s-1.0508 2.3594-2.3594 2.3594zm-18.129 25.762c0-1.3008 1.0586-2.3594 2.3594-2.3594s2.3594 1.0586 2.3594 2.3594-1.0586 2.3594-2.3594 2.3594-2.3594-1.0508-2.3594-2.3594zm13.508 44.129c-1.3008 0-2.3594-1.0586-2.3594-2.3594 0-1.3008 1.0586-2.3594 2.3594-2.3594s2.3594 1.0586 2.3594 2.3594c0 1.3008-1.0586 2.3594-2.3594 2.3594zm11.301 6.4297c-1.3008 0-2.3594-1.0586-2.3594-2.3594 0-1.3008 1.0586-2.3594 2.3594-2.3594s2.3594 1.0586 2.3594 2.3594c0 1.3008-1.0508 2.3594-2.3594 2.3594zm41.102-12.211c1.3008 0 2.3594 1.0586 2.3594 2.3594 0 1.3008-1.0586 2.3594-2.3594 2.3594-1.3008 0-2.3594-1.0586-2.3594-2.3594-0.003907-1.2969 1.0586-2.3594 2.3594-2.3594zm-5.3203-12.367c0 1.7109-1.3984 3.1094-3.1094 3.1094h-35.242c-1.7188 0-3.1094-1.3984-3.1094-3.1094v-35.242c0-1.7188 1.3984-3.1094 3.1094-3.1094h35.23c1.7188 0 3.1094 1.3984 3.1094 3.1094v35.242zm15.879 3.1289c0 1.3008-1.0586 2.3594-2.3594 2.3594s-2.3594-1.0586-2.3594-2.3594 1.0586-2.3594 2.3594-2.3594 2.3594 1.0586 2.3594 2.3594z"/>
  <path d="m63.398 49.211c0-0.76953-0.21875-1.7383-0.85156-2.5195-0.39062-0.48047-1.0117-0.96875-1.9609-1.1719-0.078126-0.69141-0.39063-1.8984-1.4219-2.6016v-2.7305h4.9219c0.17187 0 0.30078-0.14062 0.30078-0.30078v-1.3984c0-0.17188-0.14062-0.30078-0.30078-0.30078h-6.9219v4.2617c-0.5 0.039062-1.0312 0.14844-1.6094 0.39062-0.55859-0.62891-1.2617-1.0586-2.0391-1.2812v-6.6992c0-0.17188-0.14062-0.30078-0.30078-0.30078h-1.3984c-0.17188 0-0.30078 0.14062-0.30078 0.30078v6.6211c-0.92969 0.17969-1.7305 0.64062-2.3516 1.3008-0.23047-0.12891-0.46094-0.25-0.69141-0.33984v-5.2617h-7.5312c-0.17188 0-0.30078 0.14062-0.30078 0.30078v1.3984c0 0.17188 0.14062 0.30078 0.30078 0.30078h5.5312v2.8516c-1.1289-0.019531-2.2305 0.32812-3.1914 1.0508-1.1016 0.82812-1.8086 2.0195-1.9219 3.1406-1.9102 0.67188-3.6914 2.5312-3.6602 4.8906 0.050781 3.6289 2.0898 4.9609 3.6211 5.6406 0.91016 0.39844 1.9219 0.48047 3.2109 0.48047 0.28906 0 0.60156 0 0.92188-0.011719v3.6211h-6.4492c-0.17188 0-0.30078 0.14062-0.30078 0.30078v1.3984c0 0.17188 0.14062 0.30078 0.30078 0.30078h8.4492v-5.6289c0.73828 0.011718 1.5781 0.011718 2.4492 0.011718v7.3398c0 0.17188 0.14062 0.30078 0.30078 0.30078h1.3984c0.17188 0 0.30078-0.14063 0.30078-0.30078l0.007812-7.3672c0.41016 0 0.80859 0 1.1992-0.011719 0.69922 0 1.3594-0.011719 1.9414-0.011719v4.8242h8.0195c0.17188 0 0.30078-0.14062 0.30078-0.30078v-1.3984c0-0.17188-0.14062-0.30078-0.30078-0.30078h-6.0195v-2.8203c4.8008 0 7.0898-0.69141 7.8008-2.2891 0.62109-1.3906 0.69922-2.7617 0.21875-3.8711-0.30859-0.75-0.89062-1.3711-1.6719-1.8086zm-0.36719 4.8789c-0.14062 0.26172-0.94922 1.1719-6.6094 1.1016-0.75-0.011718-1.9609 0-3.3086 0.011719-1.7891 0.011719-3.8516 0.019531-5.4609 0.011719-0.75-0.011719-1.4219 0-2.0312 0.011718-0.050782-0.25-0.011719-0.71094 0.28125-1.1484 0.26172-0.41016 0.73047-0.78906 1.5195-0.57031 0.42969 0.12109 0.89062-0.12109 1.1094-0.51172 0.32031-0.55078 0.019531-1.25-0.58984-1.4297-1.7383-0.48047-3.0586 0.37891-3.7305 1.4219-0.46094 0.71094-0.64844 1.5-0.60938 2.2305-0.58984-0.03125-1.0703-0.10938-1.4609-0.28125-1.1602-0.51953-2.3984-1.2812-2.4414-3.8398-0.019531-1.6016 1.4609-2.8984 2.8516-3.1094 0 0 0.89062-0.19922 0.87891-0.32031-0.039063-0.42188-0.14844-1.0508 0-1.5703 0.12891-0.46094 0.51172-0.98828 1.0703-1.4102 0.51172-0.39062 1.8789-1.1602 3.6602-0.17188-0.070312 0.23047-0.12891 0.46094-0.16016 0.69922-0.16016 1 0.039062 1.8516 0.44141 2.5391-0.23828 0.078125-0.48828 0.12891-0.71094 0.12891-0.070313 0-0.39844-0.078124-0.66016-0.39062-0.26953-0.32031-0.69141-0.48828-1.0898-0.37109-0.64062 0.19141-0.96094 0.94922-0.57812 1.5 0.42969 0.64062 0.96094 0.94922 1.3906 1.1016 0.32812 0.10938 0.66016 0.16016 0.98047 0.16016 0.83984 0 1.6289-0.30859 2.1602-0.58984 0.48828 0.32812 1.0195 0.58984 1.5195 0.78125 0.55859 0.21875 1.1797-0.14062 1.3086-0.73047l0.011719-0.03125c0.10156-0.48047-0.17969-0.94922-0.64063-1.1211-0.96094-0.35938-2.3789-1.1602-2.1406-2.6719 0.19922-1.2891 1.1289-1.9219 1.9297-2.0703 0.98828-0.19141 1.9219 0.23828 2.4688 1.1484 0 0 0.32031 0.57031 0.39844 0.69141 0.078126 0.10938 0.91016-0.30859 0.91016-0.30859 1.0508-0.53906 1.8789-0.69922 2.3086-0.42969 0.32031 0.19141 0.48047 0.64062 0.55859 1.0117-1.1719 0.23828-1.7891 0.89062-2.1016 1.4102-0.46875 0.78906-0.51953 1.6992-0.44922 2.4492-1.8984 0.26172-2.7188 1.8516-2.9883 3.2188-0.12109 0.58984 0.35938 1.1406 0.96875 1.1289h0.058594c0.46875-0.011719 0.85156-0.35156 0.94141-0.80859 0.14062-0.69141 0.51172-1.5703 1.5195-1.5898h0.039063c0.96875 0 1.3711 0.69922 1.5391 1.2812 0.12109 0.42969 0.53125 0.71094 0.98047 0.69922 0.67188-0.019531 1.1211-0.67969 0.92188-1.3203-0.28906-0.94141-0.89062-1.8711-1.9102-2.3398-0.44141-1.3398 0.48828-2.2188 1.0391-2.3086 0.89844-0.16016 1.4609 0.10156 1.8398 0.53125 0.48828 0.55078 0.48047 1.3984 0.42969 1.5508 0 0-0.039062 0.14844-0.14062 0.78906-0.03125 0.17188 0.80859 0.48828 1.3398 0.82031 0.32031 0.19922 0.53125 0.46094 0.66016 0.76172 0.23438 0.57422 0.22656 1.3828-0.22266 2.2539z"/>
 </g>
</svg>
    ) ,
    title: "AI Development",
    paragraph:
      "Bring your ideas to life with our AI development. We create custom AI solutions that enhance efficiency and drive growth.",
  },
  {
    id: 1,
    icon:(
      <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" ><path d="M489.9,371.6l-13.9-3.3c-6.8-1.6-10.9-8.4-9.3-15.2c0.3-1.3,0.8-2.5,1.5-3.6l7.5-12.3c1.9-3.2,1.5-7.2-1.2-9.8l-17.8-17.8  c-2.6-2.6-6.7-3.1-9.8-1.2l-12.3,7.5c-5.9,3.6-13.7,1.8-17.3-4.2c-0.7-1.1-1.2-2.4-1.5-3.6l-3.3-13.9c-0.9-3.6-4.1-6.1-7.8-6.1  h-12.9c5.4-8,8.3-17.4,8.3-27.1V65.1c0-26.5-21.5-48-48-48c-3.3,0-6.5,0.3-9.7,1l-194.3,40c-21,4.4-36.6,22.2-38.2,43.6l-5.7,80.3  l-39.4,86.7c-1.8,4,0,8.8,4,10.6c1,0.5,2.2,0.7,3.3,0.7h32v96.4c0,13.3,10.7,24,24,24c3.1,0,6.1-0.6,8.9-1.7l63.1-25.2V496h16V367  l59-23.6l-5.9-14.9L131,383.8c-4.1,1.6-8.8-0.4-10.4-4.5c-0.4-0.9-0.6-2-0.6-3V272c0-4.4-3.6-8-8-8c0,0,0,0,0,0H84.4l34.9-76.7  c0.4-0.9,0.6-1.8,0.7-2.7l5.8-81.8c1.1-14.3,11.4-26.1,25.5-29.1l194.3-40c17.3-3.6,34.2,7.6,37.8,24.9c0.4,2.1,0.7,4.3,0.7,6.5  v195.8c0,13.1-7.9,24.9-20.1,29.7l5.4,13.4l-1,4c-1.6,6.8-8.4,10.9-15.2,9.3c-1.3-0.3-2.5-0.8-3.6-1.5l-12.3-7.5  c-3.2-1.9-7.2-1.5-9.8,1.2l-17.8,17.8c-2.6,2.6-3.1,6.7-1.2,9.8l7.5,12.3c3.6,5.9,1.8,13.7-4.2,17.3c-1.1,0.7-2.4,1.2-3.6,1.5  l-13.9,3.3c-3.6,0.9-6.1,4.1-6.1,7.8v25.2c0,3.7,2.5,6.9,6.1,7.8l13.9,3.3c6.8,1.6,10.9,8.4,9.3,15.2c-0.3,1.3-0.8,2.5-1.5,3.6  l-7.5,12.3c-1.9,3.2-1.5,7.2,1.2,9.8l17.8,17.8c2.6,2.6,6.7,3.1,9.8,1.2l12.3-7.5c5.9-3.6,13.7-1.8,17.3,4.2  c0.7,1.1,1.2,2.4,1.5,3.6l3.3,13.9c0.9,3.6,4.1,6.1,7.8,6.1h25.2c3.7,0,6.9-2.5,7.8-6.1l3.3-13.9c1.6-6.8,8.4-10.9,15.2-9.3  c1.3,0.3,2.5,0.8,3.6,1.5l12.3,7.5c3.2,1.9,7.2,1.5,9.8-1.2l17.8-17.8c2.6-2.6,3.1-6.7,1.2-9.8l-7.5-12.3  c-3.6-5.9-1.8-13.7,4.2-17.3c1.1-0.7,2.4-1.2,3.6-1.5l13.9-3.3c3.6-0.9,6.1-4.1,6.1-7.8v-25.2C496,375.7,493.5,372.5,489.9,371.6z   M480,398.3l-7.8,1.9c-15.4,3.7-24.8,19.1-21.1,34.5c0.7,2.9,1.9,5.7,3.4,8.3l4.2,6.9l-8.9,8.9l-6.9-4.2c-13.5-8.3-31.1-4-39.3,9.4  c-1.6,2.6-2.7,5.4-3.4,8.3l-1.9,7.8h-12.6l-1.9-7.8c-3.7-15.4-19.1-24.8-34.5-21.1c-2.9,0.7-5.7,1.9-8.3,3.4l-6.9,4.2l-8.9-8.9  l4.2-6.9c8.3-13.5,4-31.1-9.4-39.3c-2.6-1.6-5.4-2.7-8.3-3.4l-7.8-1.9v-12.6l7.8-1.9c15.4-3.7,24.8-19.1,21.1-34.5  c-0.7-2.9-1.9-5.7-3.4-8.3l-4.2-6.9l8.9-8.9l6.9,4.2c13.5,8.3,31.1,4,39.3-9.4c1.6-2.6,2.7-5.4,3.4-8.3l1.9-7.8h12.6l1.9,7.8  c3.7,15.4,19.1,24.8,34.5,21.1c2.9-0.7,5.7-1.9,8.3-3.4l6.9-4.2l8.9,8.9l-4.2,6.9c-8.3,13.5-4,31.1,9.4,39.3  c2.6,1.6,5.4,2.7,8.3,3.4l7.8,1.9V398.3z"/><path d="M160,296c0,13.3,10.7,24,24,24c13.3,0,24-10.7,24-24c0-10.2-6.4-19.2-16-22.6V168c0-2.1-0.8-4.2-2.3-5.7l-32-32l-11.3,11.3  l29.7,29.7v102.1C166.4,276.8,160,285.8,160,296z M184,304c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8C192,300.4,188.4,304,184,304z"/><path d="M288,272c0,13.3,10.7,24,24,24c13.3,0,24-10.7,24-24c0-13.3-10.7-24-24-24c-3.6,0-7.1,0.8-10.4,2.3L264,212.7V107.3  l29.7-29.7l-11.3-11.3l-32,32c-1.5,1.5-2.3,3.5-2.3,5.7v112c0,2.1,0.8,4.2,2.3,5.7l40,40C288.8,264.9,288,268.4,288,272z M320,272  c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8C316.4,264,320,267.6,320,272z"/><path d="M357.7,69.7l-11.3-11.3l-40,40c-1.5,1.5-2.3,3.5-2.3,5.7v81.4c-12.5,4.4-19,18.1-14.6,30.6c4.4,12.5,18.1,19,30.6,14.6  s19-18.1,14.6-30.6c-2.4-6.8-7.8-12.2-14.6-14.6v-78.1L357.7,69.7z M312,216c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8  C320,212.4,316.4,216,312,216z"/><path d="M240,296c13.3,0,24-10.7,24-24c0-13.3-10.7-24-24-24c-3.6,0-7.1,0.8-10.4,2.3l-5.7-5.7V128c0-2.1-0.8-4.2-2.3-5.7l-32-32  l-11.3,11.3l29.7,29.7V248c0,2.1,0.8,4.2,2.3,5.7l8,8c-5.7,12-0.7,26.3,11.3,32C232.9,295.2,236.4,296,240,296z M248,272  c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8C244.4,264,248,267.6,248,272z"/><path d="M392,352c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40C432,369.9,414.1,352,392,352z M392,416c-13.3,0-24-10.7-24-24  s10.7-24,24-24s24,10.7,24,24C416,405.2,405.2,416,392,416z"/><path d="M489.6,309.2l12.2-10.4c-5.1-6-10.6-11.5-16.6-16.6l-10.4,12.2C480.1,298.9,485.1,303.9,489.6,309.2z"/><path d="M468.2,269.8c-15.5-9.7-32.8-16.4-50.8-19.6l-2.8,15.8c16,2.8,31.4,8.8,45.2,17.4L468.2,269.8z"/><path d="M266,369.4l-15.8-2.8c-1,5.6-1.7,11.3-2,16.9l16,0.9C264.5,379.4,265.1,374.4,266,369.4z"/><path d="M264.2,399.5l-16,0.9c2.4,39.4,20.8,76.2,51,101.7l10.3-12.2C282.7,467.2,266.3,434.6,264.2,399.5z"/></svg>
    )  ,
      title: "Custom AI Tool Development",
    paragraph:
      "Build custom AI tools with us. We design software that automates tasks and delivers actionable insights tailored to your needs.",
  },
  {
    id: 1,
    icon:(
      <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
 <path d="m14.531 52.078c0 3.457 2.0859 6.5781 5.2812 7.9023s6.875 0.58984 9.3203-1.8555c2.4492-2.4453 3.1797-6.125 1.8555-9.3203-1.3242-3.1992-4.4414-5.2812-7.9023-5.2812-4.7227 0.003906-8.5508 3.832-8.5547 8.5547zm14.828 0c-0.003906 2.5352-1.5312 4.8203-3.875 5.793-2.3438 0.96875-5.043 0.42969-6.8359-1.3633-1.793-1.7969-2.3281-4.4922-1.3594-6.8359 0.97266-2.3438 3.2617-3.8711 5.7969-3.8711 3.4648 0.003907 6.2695 2.8125 6.2734 6.2773zm20.691-3.043c-3.4609-0.003906-6.582 2.082-7.9062 5.2773s-0.59375 6.875 1.8516 9.3242c2.4453 2.4453 6.125 3.1797 9.3203 1.8555 3.1992-1.3242 5.2852-4.4414 5.2852-7.9023-0.007812-4.7188-3.832-8.5469-8.5508-8.5547zm0 14.828c-2.5352 0-4.8242-1.5312-5.7969-3.875-0.96875-2.3438-0.43359-5.0391 1.3633-6.8359 1.793-1.793 4.4922-2.3281 6.8359-1.3594 2.3438 0.97266 3.8711 3.2578 3.8711 5.7969-0.003907 3.4609-2.8086 6.2695-6.2734 6.2734zm35.336 0.84375-16.945-0.003906c-3.7461 0.007813-7.1523 2.1875-8.7227 5.5898-0.39844-0.050781-0.79688-0.074219-1.1953-0.078125h-16.945c-0.42969 0-0.86328 0.03125-1.2891 0.089844-1.5703-3.4102-4.9766-5.5977-8.7305-5.6016h-16.945c-5.3047 0.007813-9.6055 4.3086-9.6133 9.6133v8.4727c0 0.62891 0.51172 1.1406 1.1406 1.1406h25.824v4.3711c0 0.62891 0.51172 1.1406 1.1406 1.1406h33.895c0.62891 0 1.1406-0.51172 1.1406-1.1406v-4.3711h25.719c0.30078 0 0.59375-0.12109 0.80469-0.33203 0.21484-0.21484 0.33594-0.50391 0.33594-0.80859v-8.4727c-0.003906-5.3086-4.3047-9.6094-9.6133-9.6172zm-78.105 16.941v-7.332c0.003906-4.0469 3.2852-7.3281 7.332-7.332h16.945c2.7148 0.003906 5.2109 1.5078 6.4805 3.9102-3.6641 1.457-6.0664 4.9961-6.0742 8.9336v1.8203zm58.574 5.5117h-31.609v-7.332c0.007812-4.0469 3.2852-7.3242 7.332-7.3281h16.945c4.0469 0.003906 7.3281 3.2852 7.332 7.332zm26.863-5.5117h-24.582v-1.8203c-0.007813-3.9727-2.4492-7.5352-6.1562-8.9648 1.2734-2.3867 3.7578-3.875 6.4609-3.8789h16.945c4.0469 0.003906 7.3281 3.2852 7.332 7.332zm-15.801-38.125c-3.457 0-6.5781 2.082-7.9023 5.2812-1.3242 3.1953-0.58984 6.875 1.8555 9.3203 2.4453 2.4453 6.125 3.1797 9.3203 1.8555 3.1992-1.3242 5.2812-4.4453 5.2812-7.9023-0.003906-4.7266-3.8359-8.5547-8.5586-8.5547zm0 14.828c-2.5352 0-4.8242-1.5312-5.793-3.875-0.97266-2.3438-0.4375-5.043 1.3594-6.8359 1.793-1.793 4.4922-2.3281 6.8359-1.3594 2.3438 0.97266 3.8711 3.2578 3.8711 5.7969-0.003906 3.4648-2.8125 6.2695-6.2773 6.2734zm-37.074-38.609c0-0.78516 0.47266-1.4922 1.1992-1.7969 0.72656-0.30078 1.5664-0.13281 2.1211 0.42188 0.55469 0.55859 0.72266 1.3945 0.42188 2.1211-0.30078 0.72656-1.0117 1.1992-1.7969 1.1992-1.0742 0-1.9453-0.87109-1.9453-1.9453zm5.5078 0c0-0.78516 0.47266-1.4922 1.1992-1.7969 0.72656-0.30078 1.5625-0.13281 2.1211 0.42188 0.55469 0.55469 0.72266 1.3906 0.42188 2.1172s-1.0078 1.2031-1.793 1.2031c-1.0742 0-1.9453-0.86719-1.9492-1.9453zm5.5078 0c0-0.78516 0.47266-1.4961 1.2031-1.7969 0.72656-0.30078 1.5625-0.13281 2.1211 0.42188 0.55469 0.55859 0.71875 1.3984 0.41797 2.125-0.30469 0.72656-1.0156 1.1992-1.8008 1.1953-1.0703-0.003906-1.9375-0.87109-1.9414-1.9453zm5.5078 0c0-0.78516 0.47656-1.4922 1.2031-1.7969 0.72656-0.30078 1.5625-0.13281 2.1172 0.42188 0.55859 0.55859 0.72266 1.3945 0.42188 2.1211-0.30078 0.72656-1.0078 1.1992-1.7969 1.1992-1.0742 0-1.9453-0.87109-1.9453-1.9453zm-41.727 12.539v6.0273c0 0.45312 0.26562 0.85938 0.67578 1.043 0.41016 0.18359 0.89062 0.10938 1.2266-0.19141l7.4727-6.6445 14.754 0.003906c1.5977-0.003906 2.8906-1.2969 2.8906-2.8906v-0.69922h3.6289l3.7734 6.6016v-0.003906c0.20312 0.35547 0.57812 0.57812 0.98828 0.57812 0.41016 0 0.78906-0.22266 0.98828-0.57812l3.7734-6.6016h3.6289v0.70312c0 1.5938 1.293 2.8867 2.8906 2.8906h14.758l7.4727 6.6445v-0.003906c0.33594 0.30078 0.81641 0.375 1.2266 0.19141 0.41016-0.18359 0.67578-0.58984 0.67188-1.043v-6.0273c1.0625-0.45312 1.75-1.5 1.75-2.6523v-12.59c0-1.5977-1.293-2.8906-2.8906-2.8906h-19.887v-0.69922c0-1.5977-1.293-2.8906-2.8867-2.8906h-22.988c-1.5977 0-2.8906 1.293-2.8906 2.8906v0.69922h-19.887c-1.5938 0-2.8867 1.293-2.8906 2.8906v12.59c0.003906 1.1562 0.69141 2.1992 1.75 2.6523zm69.68-15.852c0.33203 0.003906 0.60156 0.27344 0.60938 0.60547v12.594c-0.007813 0.33594-0.27734 0.60547-0.60938 0.60938-0.63281 0-1.1406 0.51172-1.1406 1.1406v4.3906l-5.8984-5.2422-0.015625-0.011719-0.046875-0.039063-0.042969-0.03125-0.050781-0.03125-0.046875-0.027343-0.050781-0.027344-0.050782-0.023437-0.054687-0.019532-0.050781-0.019531-0.10938-0.03125-0.054688-0.011719-0.054687-0.007812h-0.11328l-15.207-0.003906c-0.33594-0.003907-0.60547-0.27344-0.60938-0.60547v-0.69922h0.82422v-0.003906c1.5938 0 2.8867-1.293 2.8867-2.8867v-9.6172zm-46.371-2.9805h-0.003907c0.007813-0.33594 0.27734-0.60547 0.60938-0.60938h22.992c0.33203 0.003906 0.60156 0.27344 0.60938 0.60938v12.59c-0.007812 0.33594-0.27734 0.60547-0.60938 0.60938h-7.4961l-0.0625 0.007812-0.042969 0.007812-0.10547 0.023438-0.10547 0.035156-0.0625 0.027344-0.039063 0.019531-0.054687 0.03125-0.042969 0.027344-0.046875 0.03125-0.046875 0.035156-0.039062 0.03125-0.046875 0.039063-0.035157 0.035156-0.039062 0.042969c-0.011719 0.015625-0.023438 0.03125-0.039062 0.046875l-0.027344 0.039062c-0.015625 0.019532-0.027344 0.042969-0.039063 0.0625l-0.015625 0.023438-0.011718 0.019531-3.1016 5.4219-3.1016-5.4219-0.011718-0.019531-0.015625-0.023438c-0.011719-0.023437-0.027344-0.042968-0.039063-0.0625l-0.027344-0.039062c-0.011718-0.015625-0.023437-0.03125-0.039062-0.046875l-0.039062-0.042969-0.035157-0.039062-0.042969-0.039063-0.039062-0.03125-0.046875-0.035156-0.046875-0.03125-0.042969-0.027344-0.054687-0.03125-0.039063-0.019531-0.0625-0.027344-0.14062-0.046875-0.070312-0.015625-0.046875-0.007812-0.0625-0.007813h-0.097657l-7.3867 0.007813c-0.33594-0.003907-0.60547-0.27344-0.60938-0.60938zm-22.777 3.5898c0.007813-0.33594 0.27734-0.60547 0.60938-0.60937h19.887v9.6094c0 1.5977 1.293 2.8906 2.8906 2.8906h0.82422v0.69922h-0.003906c-0.003906 0.33594-0.27344 0.60547-0.60938 0.60938h-15.32l-0.0625 0.011719-0.046875 0.007812-0.058594 0.015626-0.10547 0.035156-0.046875 0.019531-0.10156 0.050781-0.050782 0.03125-0.046874 0.03125-0.042969 0.03125-0.046875 0.039063-0.015625 0.011719-5.8984 5.2422-0.003906-4.3867c0-0.62891-0.50781-1.1406-1.1406-1.1406-0.33203-0.003906-0.60156-0.27344-0.60547-0.60938z"/>
</svg>
    )  ,
    title: "AI Consulting",
    paragraph:
      "Unlock potential with our AI consulting. We offer expert advice to optimize AI integration and achieve your business goals.",
  },
];
export default featuresData;
