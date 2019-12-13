/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
// import * as firebase from "firebase"

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    authUser: {
      id: "rfeu9erwpewjoprtfio",
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
    ],
    completedTests: [
      {
        codeName: "Код Грея",
        result: "4/5",
        timeUsed: "3:37",
        date: "09-12-2019 04:42"
      }, {
        codeName: "Код Бергера",
        result: "2/5",
        timeUsed: "4:21",
        date: "10-12-2019 12:56"
      },
    ]
  },
  mutations: {
    createTestRecord(state, payload) {
      state.completedTests.push(payload);
    }
  },
  actions: {
    createTestRecord({ commit }, payload) {
      const test = {
        codeName: payload.codeName,
        result: payload.result,
        timeUsed: payload.timeUsed,
        date: payload.timeUsed
      }
      commit('createTestRecord', test);
    }
  },
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
    },
    getCompletedTests(state) {
      return state.completedTests;
    }

  }
})


