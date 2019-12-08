/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
// import * as firebase from "firebase"

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    authUser: {
      email: "hatemyself393@gmail.com"
    },
    codes: [
      { name: "Систематичні коди", subcodes: [], progress: 0 },
      { name: "Циклічні коди", subcodes: [], progress: 0 },
      {
        name: "Недвійкові коди",
        subcodes: [
          {
            name: "Первинні недвійкові коди",
            codecCode: "PrimalNonBinaryCode",
            complete: false
          },
          {
            name: "Код з перевіркою по модулю q",
            codecCode: "QCheckCode",
            complete: true
          },
          {
            name: "Код з простим повторенням",
            codecCode: "SimpleRepeatCode",
            complete: true
          },
          { name: "Ітеративний код", codecCode: "IterateCode", complete: false }
        ],
        progress: 50
      },
      {
        name: "Інші коди",
        subcodes: [
          { name: "Код Грея", codecCode: "GreyCode", complete: false },
          { name: "Код Бергера", codecCode: "BergerCode", complete: false },
          {
            name: "Двійково-десятковий код",
            codecCode: "BinaryDecimalCode",
            complete: true
          },
          {
            name: "Код Шеннона-Фано",
            codecCode: "ShennonFano",
            complete: false
          }
        ],
        progress: 25
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    allCodes(state) {
      return state.codes;
    },

    getCodeById: (state) => {
      return (codecCode) => {
        let found = state.codes.find(code => code.subcodes.find(subcode => subcode.codecCode == codecCode));
        return found.subcodes.find(subcode => subcode.codecCode == codecCode);
      }
    },

    getUser(state) {
      return state.authUser;
    }
  }
})


