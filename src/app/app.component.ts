import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { asyncScheduler, AsyncSubject, BehaviorSubject, filter, from, fromEvent, interval, Observable, of, ReplaySubject, scan, Subject, tap } from 'rxjs';
import{map, take} from 'rxjs/operators';
import{ajax} from 'rxjs/ajax';


import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shivafeb18tutorial';
   Message='Om Namah Shivaay'
   @ViewChild(PostComponent) childComp: any;
   childmessage!: string;
  newMsg!: string;
  //subjects
    sourceSubject=new Subject();
     behaviorSubject=new BehaviorSubject<string>('Default Value');
    replaySubjects=new ReplaySubject(2);
  
   constructor(){}
   ngOnInit(){
    this.handleSubject();
    this.handlebehaviorSubject();
    this.handlereplaySubject();
    this.waterPurifier();
    this.waterPurifierair()
    this.dorxjs();
    this.source();
    this.tapped();
    //this.unicastObs();
    this.multicastSub()
    this.somedata();
    this.behavioursub();
    this.replaySub();
    this.asyncSub();
    this.async1(this.url).subscribe((data: any)=>console.log(data))
    setTimeout(()=>{
      this.async1(this.url).subscribe((data: any)=>console.log(data))
    },3000)
  

    
   }


   private handleSubject(){
    this.sourceSubject.subscribe((it)=>console.log(it))
    this.sourceSubject.next('maadevaa');
    this.sourceSubject.next('maadevaa1');
    this.sourceSubject.next('maadevaa2');
    }

    private handlebehaviorSubject(){
      this.behaviorSubject.next('A value');
      this.behaviorSubject.next('Another value');
      this.behaviorSubject.next('OneAnother value');
      this.behaviorSubject.subscribe((it)=>console.log(it));
      this.behaviorSubject.subscribe((it)=>console.log(it));
    }



    private handlereplaySubject(){
      this.replaySubjects.next('replayvalue');
      this.replaySubjects.next('replayvalue1');
      this.replaySubjects.next('replayvalue2');
      this.replaySubjects.subscribe((it)=>console.log(it));
     }
   ngAfterViewInit() {
    console.log(this.childComp);
    this.childmessage=this.childComp.childMessages;
    console.log(this.childmessage)
   }

   receivedMessage($event:any) {
   this.newMsg=$event;
    
   }

   keypress(username: any){
    console.log(username);
   }   

    waterPurifier(){
    const stream$=from(['water','milk','water','juice']);
    const waterPipes$=stream$.pipe(filter((water)=>
     water==='water' || water==='milk')).subscribe((water: any)=>console.log("drink it",water))
     waterPipes$.unsubscribe();
   }
   waterPurifierair(){
    const stream$=from(['water','milk','water','juice']);
    const waterPipes$=stream$.pipe(tap(water=>console.log(water)),filter((water)=>
     water==='water' || water==='milk'))
     .subscribe((water: any)=>console.log("streamofwwater",water))
     waterPipes$.unsubscribe();
   }

   dorxjs(){
    let hello=of('hello' ,asyncScheduler);
   hello.subscribe((sub)=>console.log(sub));
   
   const world=from('world');
   world.subscribe((sub)=>console.log(sub));

   const event=fromEvent(document,'click');
   event.subscribe((event)=>console.log(event))


  //  const periodic=interval(500);
  //  periodic.subscribe((period)=>console.log(period));

  //  hot - multiple subscription ,cold - single subscription

      let subjects=new Subject()

      subjects.subscribe((sub)=>console.log(sub))
      subjects.next('Maadevaa');
      subjects.next('Har Har mahadev')
      subjects.subscribe((sub)=>console.log(sub))//it will not get the values because we subscribed after emitting

      let behaviorSubject=new BehaviorSubject('Mahadev');

      behaviorSubject.subscribe((sub)=>console.log(sub));
      behaviorSubject.next('Shiva');
   }
   
   source(){
    const source=from([1,2,,3,4,5,6,7,8,9,10]);
    const modified=source.pipe(map((each) => Math.pow(each!,2)),
    scan((acc,val)=>acc+val),
    filter(v=> v>10),
    take(3)
      )

      let vl=modified.subscribe((val)=>console.log)
      return vl
    
   }
   tapped(){
    const source=of('maadevaa');
    const tapped1=source.pipe(tap
      (source),
      map(v=>`Helli ${v}`),
      tap(async v=>{
        await Promise.resolve()
      })
      )

   }

      unicastObs(){
        let observable=new Observable(obj => obj.next(Math.random()));

        //sub1
        observable.subscribe((m)=>console.log(m))
        //sub2
        observable.subscribe((m)=>console.log(m))
      }

      multicastSub(){
        let subject=new Subject();

          //sub1
          subject.subscribe((m)=>console.log(m))
          //s
          subject.subscribe((m)=>console.log(m))

          subject.next(Math.random());
      }

      somedata(){
     let data:any =ajax('https://jsonplaceholder.typicode.com/users');
         
     //using observable
     //sub1
        // data.subscribe((m: any)=>console.log(m));
        // //sub2
        // data.subscribe((m: any)=>console.log(m));

        //same using subjects
        let subjects1=new Subject();

        subjects1.subscribe(m=>console.log(m));
        subjects1.subscribe(m=>console.log(m));


          let result=data.subscribe(subjects1);
      }


      behavioursub(){
        const subject=new Subject();
        subject.subscribe(m=>console.log(`Subject subscriber : ${m}`))
        
        subject.next(2020);
        subject.subscribe(m=>console.log(`Subject subscriber2 : ${m}`))//return nothing


         //Behaviour subject
      let bSubject=new BehaviorSubject<number>(12);
      bSubject.subscribe (m=>console.log(`behavior subject : ${m}`))

      bSubject.next(2023);
      bSubject.subscribe(m=>console.log(`behavior subject2 : ${m}`));
      }

      replaySub(){
        let replySub$=new ReplaySubject();

        replySub$.next('Har Har Mahadev...');
        replySub$.next('Maadevaa...');

        replySub$.subscribe(m=>console.log(`${m}`));
        }

      asyncSub(){
        const asyncSub=new AsyncSubject();
        asyncSub.next('user1');
        asyncSub.next('user2');
        asyncSub.next('user3');

        asyncSub.subscribe((m)=>console.log(m));
        asyncSub.complete();
     
       }
    
        url="https://restcountries.com/v2/name/india?fullText=true"
      async1(url:any){
       
       const cache:any={};
        if(!cache[url]){
          //api call using fetch
          cache[url]=new AsyncSubject();
          fetch(url).then(res=>res.json())
          .then(m=>{
            cache[url].next(m)
            cache[url].complete()
          })

        }
        return cache[url].asObservable();
      }


//       rxjs(){
//         var source = Rx.Observable
//     .interval(500 /* ms */)
//     .timeInterval()
//     .take(3);

// var subscription = source.subscribe(
//     function (x) {
//         console.log('Next: ' + x);
//     },
//     function (err) {
//         console.log('Error: ' + err);
//     },
//     function () {
//         console.log('Completed');
//     });
//       }
   }

   
  


 


