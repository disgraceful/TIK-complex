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
      { name: "Систематичні коди", subcodes: [] },
      { name: "Циклічні коди", subcodes: [] },
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
        ]
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
        ]
      }
    ],
    completedTests: [
      {
        codeName: "Код з перевіркою по модулю q",
        result: "4/5",
        timeUsed: "3:37",
        date: "09.12.2019, 04:42:12"
      }, {
        codeName: "Двійково-десятковий код",
        result: "3/5",
        timeUsed: "4:21",
        date: "10.12.2019, 12:56:12"
      },
    ]
  },
  mutations: {
    createTestRecord(state, payload) {
      state.completedTests.push(payload);
    },
    completeCode(state, payload) {
      let found = state.codes.find(code => code.subcodes.find(subcode => subcode.codecCode == payload.codecCode));
      let index = found.subcodes.findIndex(subcode => subcode.codecCode == payload.codecCode);
      found.subcodes[index].complete = true;
    }
  },
  actions: {
    createTestRecord({ commit }, payload) {
      const test = {
        codeName: payload.codeName,
        result: payload.result,
        timeUsed: payload.timeUsed,
        date: payload.date
      }
      commit('createTestRecord', test);
      console.log('saved by Vuex');
    },
    completeCode({ commit }, payload) {
      commit('completeCode', payload);
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
    getCodeProgressArray(state) {
      let result = [];

      state.codes.forEach(code => {
        let subcodeCompleted = 0;
        code.subcodes.forEach(subcode => {
          if (subcode.complete) subcodeCompleted++;
        })

        let submit = code.subcodes.length <= 0 ? 0 : (subcodeCompleted / code.subcodes.length) * 100;
        result.push(submit);
      })
      return result;
    },
    getUser(state) {
      return state.authUser;
    },
    getCompletedTests(state) {
      return state.completedTests;
    },
    getTestByName(state) {
      return (testName) => {
        return state.completedTests.find(test => test.codeName == testName);
      }
    }

  }
})


